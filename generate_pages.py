from pathlib import Path
import json, html

ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data" / "bears.json"
OUT = ROOT / "niedzwiadki"
OUT.mkdir(exist_ok=True)

with DATA.open(encoding="utf-8") as f:
    bears = json.load(f)

def esc(x):
    return html.escape(str(x or ""))

def paragraphs(text):
    parts = [p.strip() for p in str(text or "").splitlines() if p.strip()]
    if not parts:
        return "<p>Opis zostanie uzupełniony.</p>"
    return "\n".join("<p>" + esc(p) + "</p>" for p in parts)

def gallery_html(b):
    raw = b["images"]["gallery"]
    if not raw:
        return ""
    items = [x if isinstance(x, dict) else {"file": x, "orientation": "landscape"} for x in raw]
    landscapes = [x for x in items if x.get("orientation") != "portrait"]
    portraits = [x for x in items if x.get("orientation") == "portrait"]
    rows, n = [], 2
    for group, kind in ((landscapes, "landscape"), (portraits, "portrait")):
        for i in range(0, len(group), 2):
            pair = group[i:i+2]
            row_class = "gallery-row gallery-row--" + kind + (" gallery-row--single" if len(pair)==1 else "")
            figs = []
            for item in pair:
                fn = item["file"]
                figs.append('<figure class="bear-gallery-item bear-gallery-item--' + kind + '"><img src="../' + esc(b["folder"]) + '/' + esc(fn) + '" alt="' + esc(b["name"]) + ' – fotografia ' + str(n) + '" loading="lazy"></figure>')
                n += 1
            rows.append('<div class="' + row_class + '">' + "".join(figs) + '</div>')
    return '<section class="bear-gallery-section"><div class="bear-gallery-heading"><span>FOTOGRAFIE</span><h2>Galeria</h2></div><div class="bear-detail-gallery">' + "".join(rows) + '</div></section>'

for i, b in enumerate(bears):
    prev = bears[i-1] if i > 0 else bears[-1]
    nxt = bears[i+1] if i < len(bears)-1 else bears[0]
    status = ""
    if b.get("status"):
        status = '<div><span class="meta-label">Status</span><p>' + esc(b["status"]) + '</p></div>'
    portrait = " bear-main-image--portrait" if b.get("imageLayout") == "portrait" else ""
    page = '''<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{name} | Niedźwiadki Słupskie v2.0</title>
<meta name="description" content="{name} – historia, lokalizacja i fotografie.">
<link rel="icon" href="../logo/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../style.css">
</head>
<body>
<header class="header">
<a href="../index.html" class="logo"><img src="../logo/logobigblack.svg" alt="Niedźwiadki Słupskie v2.0"></a>
<nav class="navigation">
<a href="../index.html#niedzwiadki">Niedźwiadki</a><a href="../index.html#mapa">Mapa</a><a href="../index.html#galeria">Galeria</a><a href="../index.html#oprojekcie">O projekcie</a><a href="../index.html#omnie">O mnie</a><a href="../index.html#kontakt">Kontakt</a>
</nav>
</header>
<main>
<section class="bear-back"><a href="../index.html#niedzwiadki">← Wszystkie niedźwiadki</a></section>
<section class="bear-hero">
<span class="bear-detail-number">{num:02d} / {total:02d}</span>
<h1>{name}</h1>
<div class="bear-meta">{status}<div><span class="meta-label">Współrzędne</span><p>{lat:.6f}, {lon:.6f}</p></div></div>
</section>
<section class="bear-main-photo"><img src="../{folder}/{main}" alt="{name}" class="bear-main-image{portrait}"></section>
<section class="bear-story"><div class="bear-story-label">HISTORIA</div><div class="bear-story-content"><h2>{name}</h2>{description}</div></section>
{gallery}
<section class="bear-navigation">
<a href="{prevslug}.html"><span>← POPRZEDNI</span>{prevname}</a>
<a href="{nextslug}.html" class="next-bear"><span>NASTĘPNY →</span>{nextname}</a>
</section>
</main>
<footer><div>NIEDŹWIADKI SŁUPSK</div><div>niedzwiadkislupsk.org</div><div>Mikołaj Żytkiewicz \\ oryer enterprises \\ © 2026</div></footer>
</body></html>'''.format(
        name=esc(b["name"]),num=b["id"],total=len(bears),status=status,
        lat=b["latitude"],lon=b["longitude"],folder=esc(b["folder"]),
        main=esc(b["images"]["main"]),portrait=portrait,
        description=paragraphs(b["description"]),gallery=gallery_html(b),
        prevslug=esc(prev["slug"]),prevname=esc(prev["name"]),
        nextslug=esc(nxt["slug"]),nextname=esc(nxt["name"])
    )
    (OUT / (b["slug"] + ".html")).write_text(page, encoding="utf-8")

print("Gotowe:", len(bears), "podstron.")
