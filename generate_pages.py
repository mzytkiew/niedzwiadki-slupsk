from pathlib import Path
import json
import html

try:
    from PIL import Image, ImageOps
except ImportError as exc:
    raise SystemExit('Brak Pillow. Zainstaluj: py -m pip install Pillow') from exc

ROOT = Path(__file__).resolve().parent
DATA = ROOT / 'data' / 'bears.json'
OUT = ROOT / 'niedzwiadki'
OUT.mkdir(exist_ok=True)
MAX_SIDE = 800
QUALITY = 83

with DATA.open(encoding='utf-8') as f:
    bears = json.load(f)


def esc(value):
    return html.escape(str(value or ''), quote=True)


def paragraphs(value):
    parts = [p.strip() for p in str(value or '').splitlines() if p.strip()]
    if not parts:
        return '<p>Opis zostanie uzupełniony.</p>'
    return '\n'.join('<p>' + esc(p) + '</p>' for p in parts)


def thumbnail(folder, filename):
    """Tworzy miniaturę bez zmiany pliku źródłowego; zwraca ścieżkę URL."""
    original = ROOT / folder / filename
    if not original.is_file():
        print(f'UWAGA: brak zdjęcia {original.relative_to(ROOT)} – używam oryginalnej ścieżki')
        return f'../{folder}/{filename}'

    dest = ROOT / folder / 'thumbs' / (Path(filename).stem + '.webp')
    dest.parent.mkdir(parents=True, exist_ok=True)
    if not dest.exists() or dest.stat().st_mtime < original.stat().st_mtime:
        with Image.open(original) as source:
            image = ImageOps.exif_transpose(source)
            image.thumbnail((MAX_SIDE, MAX_SIDE), Image.Resampling.LANCZOS)
            if image.mode not in ('RGB', 'RGBA'):
                image = image.convert('RGB')
            image.save(dest, format='WEBP', quality=QUALITY, method=6)
        print(f'Miniatura: {dest.relative_to(ROOT)}')
    return f'../{folder}/thumbs/{dest.name}'


def picture(folder, filename, alt, css_class='', lazy=True):
    preview = thumbnail(folder, filename)
    full = f'../{folder}/{filename}'
    return (
        '<a class="bear-photo-link" href="' + esc(full) + '" data-lightbox '
        'aria-label="Powiększ zdjęcie: ' + esc(alt) + '">' +
        '<img src="' + esc(preview) + '" alt="' + esc(alt) + '"' +
        (' class="' + esc(css_class) + '"' if css_class else '') +
        (' loading="lazy"' if lazy else ' loading="eager" fetchpriority="high"') +
        ' decoding="async"></a>'
    )


def gallery_html(b):
    raw = b['images']['gallery']
    if not raw:
        return ''
    items = [x if isinstance(x, dict) else {'file': x, 'orientation': 'landscape'} for x in raw]
    landscapes = [x for x in items if x.get('orientation') != 'portrait']
    portraits = [x for x in items if x.get('orientation') == 'portrait']
    rows, n = [], 2
    for group, kind in ((landscapes, 'landscape'), (portraits, 'portrait')):
        for i in range(0, len(group), 2):
            pair = group[i:i + 2]
            row_class = 'gallery-row gallery-row--' + kind + (' gallery-row--single' if len(pair) == 1 else '')
            figs = []
            for item in pair:
                image_html = picture(b['folder'], item['file'], f"{b['name']} – fotografia {n}")
                figs.append('<figure class="bear-gallery-item bear-gallery-item--' + kind + '">' + image_html + '</figure>')
                n += 1
            rows.append('<div class="' + row_class + '">' + ''.join(figs) + '</div>')
    return '<section class="bear-gallery-section"><div class="bear-gallery-heading"><span>FOTOGRAFIE</span><h2>Galeria</h2></div><div class="bear-detail-gallery">' + ''.join(rows) + '</div></section>'


# CSS i JS dotyczą tylko nowych podstron; nie zmieniają strony głównej ani uMap.
LIGHTBOX_STYLE = '''<style>
.bear-photo-link { display: block; cursor: zoom-in; }
.bear-photo-link img { display: block; }
.bear-lightbox { position: fixed; inset: 0; z-index: 99999; display: none;
  background: rgba(0,0,0,.94); align-items: center; justify-content: center; padding: 55px 18px 30px; box-sizing: border-box; }
.bear-lightbox.is-open { display: flex; }
.bear-lightbox img { max-width: 96vw; max-height: 88vh; width: auto; height: auto; object-fit: contain; }
.bear-lightbox-close { position: absolute; right: 12px; top: 8px; border: 0;
  background: transparent; color: white; font: 36px Arial,sans-serif; cursor: pointer;
  padding: 8px 14px; }
</style>'''

LIGHTBOX_SCRIPT = '''<div class="bear-lightbox" id="bear-lightbox" role="dialog" aria-modal="true" aria-label="Powiększone zdjęcie">
  <button class="bear-lightbox-close" type="button" aria-label="Zamknij zdjęcie">&times;</button>
  <img alt="">
</div>
<script>
(function () {
  const overlay = document.getElementById('bear-lightbox');
  const large = overlay.querySelector('img');
  const close = overlay.querySelector('button');
  let previousFocus = null;
  function hide() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    large.removeAttribute('src');
    if (previousFocus) previousFocus.focus();
  }
  document.querySelectorAll('a[data-lightbox]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      previousFocus = document.activeElement;
      large.src = link.href;
      large.alt = link.querySelector('img').alt;
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      close.focus();
    });
  });
  close.addEventListener('click', hide);
  overlay.addEventListener('click', function (event) { if (event.target === overlay) hide(); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) hide();
  });
})();
</script>'''

for i, b in enumerate(bears):
    prev = bears[i - 1] if i > 0 else bears[-1]
    nxt = bears[i + 1] if i < len(bears) - 1 else bears[0]
    status = ''
    if b.get('status'):
        status = '<div><span class="meta-label">Status</span><p>' + esc(b['status']) + '</p></div>'
    portrait = ' bear-main-image--portrait' if b.get('imageLayout') == 'portrait' else ''
    main_picture = picture(b['folder'], b['images']['main'], b['name'], 'bear-main-image' + portrait, lazy=False)
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
{lightbox_style}
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
<section class="bear-main-photo">{main_picture}</section>
<section class="bear-story"><div class="bear-story-label">HISTORIA</div><div class="bear-story-content"><h2>{name}</h2>{description}</div></section>
{gallery}
<section class="bear-navigation">
<a href="{prevslug}.html"><span>← POPRZEDNI</span>{prevname}</a>
<a href="{nextslug}.html" class="next-bear"><span>NASTĘPNY →</span>{nextname}</a>
</section>
</main>
<footer><div>NIEDŹWIADKI SŁUPSK</div><div>niedzwiadkislupsk.org</div><div>Mikołaj Żytkiewicz \\ oryer enterprises \\ © 2026</div></footer>
{lightbox_script}
</body></html>'''.format(
        name=esc(b['name']), num=b['id'], total=len(bears), status=status,
        lat=b['latitude'], lon=b['longitude'],
        main_picture=main_picture, lightbox_style=LIGHTBOX_STYLE,
        description=paragraphs(b['description']), gallery=gallery_html(b),
        prevslug=esc(prev['slug']), prevname=esc(prev['name']),
        nextslug=esc(nxt['slug']), nextname=esc(nxt['name']),
        lightbox_script=LIGHTBOX_SCRIPT
    )
    (OUT / (b['slug'] + '.html')).write_text(page, encoding='utf-8')

print('Gotowe:', len(bears), 'podstron. Miniatury w folderach thumbs/.')
