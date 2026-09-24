const bears = [
  {
    "id": 1,
    "name": "Niedźwiadek Amazonek",
    "slug": "amazonek",
    "folder": "amazonek",
    "status": "W renowacji",
    "imageLayout": "portrait",
    "images": {
      "main": "amazonek1.jpg",
      "gallery": []
    },
    "description": "Niedźwiadek obecnie w renowacji.",
    "latitude": 54.46461,
    "longitude": 17.03424
  },
  {
    "id": 2,
    "name": "Niedźwiadek Bursztynowy",
    "slug": "bursztynowy",
    "folder": "bursztynowy",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "bursztynowy2.jpg",
      "gallery": [
        {
          "file": "bursztynowy1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "bursztynowy3.jpg",
          "orientation": "portrait"
        },
        {
          "file": "bursztynowy4.jpg",
          "orientation": "landscape"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w 2017 jako jeden z sześciu pierwszych niedźwiadków. Figurka została przez przedszkole określona jako jego „swoisty amulet”; Szlak Słupskiego Niedźwiadka Szczęścia stał się inspiracją dla nazwy placówki.",
    "latitude": 54.473964,
    "longitude": 17.011527
  },
  {
    "id": 3,
    "name": "Niedźwiadek Ekonomik",
    "slug": "ekonomik",
    "folder": "ekonomik",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "ekonomik1.jpg",
      "gallery": [
        {
          "file": "ekonomik2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "ekonomik3.jpg",
          "orientation": "landscape"
        },
        {
          "file": "ekonomik4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek powstał z okazji 80-lecia powstania Zespołu Szkół Ekonomicznych, odsłonięty 1 czerwca 2026. Projekt - Maurycy Miedziewski i Zuzanna Ueck. Malowanie - Katarzyna Tomasiak i Agnieszka Lis.",
    "latitude": 54.465129,
    "longitude": 17.011042
  },
  {
    "id": 4,
    "name": "Niedźwiadek Europejski",
    "slug": "europejski",
    "folder": "europejski",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "europejski3.jpg",
      "gallery": [
        {
          "file": "europejski1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "europejski2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "europejski4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek w obecnej formie został odsłonięty 9 maja 2025. Został odnowiony przez firmę MARKOS ze Słupska, bowiem wcześniej był w fatalnym stanie. Wcześniej był Niedźwiadkiem komiksowym. Pokryty motywami flagi europejskiej oraz gwiazd. Został stworzony, aby promować wartości europejskie, integrację, współpracę międzynarodową oraz edukację obywatelską.",
    "latitude": 54.468501,
    "longitude": 17.031048
  },
  {
    "id": 5,
    "name": "Niedźwiadek Gryfitów",
    "slug": "gryfitow",
    "folder": "gryfitow",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "gryfitow3.jpg",
      "gallery": [
        {
          "file": "gryfitow1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "gryfitow2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "gryfitow4.jpg",
          "orientation": "portrait"
        },
        {
          "file": "gryfitow5.jpg",
          "orientation": "landscape"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty 3 czerwca 2019 z okazji jubileuszu 20-lecia powstania szkoły.",
    "latitude": 54.455901,
    "longitude": 17.063125
  },
  {
    "id": 6,
    "name": "Niedźwiadek Awansu",
    "slug": "awansu",
    "folder": "halagryfia",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "halagryfia3.jpg",
      "gallery": [
        {
          "file": "halagryfia1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "halagryfia2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "halagryfia4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek odsłonięty 14 listopada 2021. Pomysłodawcą inicjatywy było Stowarzyszenie Kibiców Słupskiej Koszykówki „Piekło Północy”, dedykowany jest sukcesom drużyny koszykarskiej Czarni Słupsk.\nPierwotnie figurka miała na nosie piłkę do koszykówki, jednak z niewiadomych przyczyn zniknęła.",
    "latitude": 54.461558,
    "longitude": 17.006782
  },
  {
    "id": 7,
    "name": "Niedźwiadek Integracyjny",
    "slug": "integracyjny",
    "folder": "integracyjny",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "integracyjny3.jpg",
      "gallery": [
        {
          "file": "integracyjny1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "integracyjny2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "integracyjny4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty 1 czerwca 2025 jako symbol placówki integracyjnej.",
    "latitude": 54.474729,
    "longitude": 17.005339
  },
  {
    "id": 8,
    "name": "Niedźwiadek Kaszubski",
    "slug": "kaszubski",
    "folder": "kaszubski",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "kaszubski4.jpg",
      "gallery": [
        {
          "file": "kaszubski1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "kaszubski2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "kaszubski3.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty na przełomie listopada/grudnia 2018 roku w ramach konkursu malowniczego pt. \"Nasz niedźwiadek szczęścia\". Organizatorem pomalowania niedźwiadka była Rada Rodziców SP 2. Celem konkursu było rozwijanie zainteresowań promujących region kaszubski, kształtowanie wyobraźni twórczej oraz rozwijanie wrażliwości estetycznej przez uczestników.",
    "latitude": 54.467141,
    "longitude": 17.038896
  },
  {
    "id": 9,
    "name": "Niedźwiadek Kolczasty",
    "slug": "kolczasty",
    "folder": "kolczasty",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "kolczasty2.jpg",
      "gallery": [
        {
          "file": "kolczasty1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "kolczasty3.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w 2017, jako jeden z sześciu pierwszych niedźwiadków.",
    "latitude": 54.469807,
    "longitude": 17.001573
  },
  {
    "id": 10,
    "name": "Niedźwiadek Kreatywny",
    "slug": "kreatywny",
    "folder": "kreatywny",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "kreatywny2.jpg",
      "gallery": [
        {
          "file": "kreatywny1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "kreatywny3.jpg",
          "orientation": "portrait"
        },
        {
          "file": "kreatywny4.jpg",
          "orientation": "landscape"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w 2020, a jego autorką jest Sandra Skurnóg, uczennica Liceum Sztuk Plastycznych. Początkowo stał przy ulicy Kołłątaja 32, później został postawiony przy Stawku Łabędzim. Współpraca z firmą Joanny Król - MatLudek.",
    "latitude": 54.475032,
    "longitude": 17.032741
  },
  {
    "id": 11,
    "name": "Niedźwiadek w Kwiatki",
    "slug": "w-kwiatki",
    "folder": "kwiatki",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "kwiatki3.jpg",
      "gallery": [
        {
          "file": "kwiatki1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "kwiatki2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "kwiatki4.jpg",
          "orientation": "portrait"
        },
        {
          "file": "kwiatki5.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w 2019 jako projekty spod rąk uczniów Liceum Plastycznego w Słupsku.",
    "latitude": 54.468864,
    "longitude": 17.044357
  },
  {
    "id": 12,
    "name": "Niedźwiadek Lampart",
    "slug": "lampart",
    "folder": "lampart",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "lampart3.jpg",
      "gallery": [
        {
          "file": "lampart1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "lampart2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "lampart4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w 2023 i pomalowany w drapieżne cętki. Ma symbolizować artystyczną odwagę, przełamywanie barier, niezależność twórczą oraz nieszablonowe myślenie, z którego słynie słupska scena alternatywna.",
    "latitude": 54.467959,
    "longitude": 17.025429
  },
  {
    "id": 13,
    "name": "Niedźwiadek Marynistyczny",
    "slug": "marynistyczny",
    "folder": "marynistyczny",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "marynistyczny3.jpg",
      "gallery": [
        {
          "file": "marynistyczny1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "marynistyczny2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "marynistyczny4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "",
    "latitude": 54.473688,
    "longitude": 17.023997
  },
  {
    "id": 14,
    "name": "Niedźwiadek Mechanik",
    "slug": "mechanik",
    "folder": "mechanik",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "mechanik4.jpg",
      "gallery": [
        {
          "file": "mechanik1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "mechanik2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "mechanik3.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty 19 września 2026 z okazji jubileuszu 80-lecia powstania szkoły. Projekt i malowanie - uczniowie ZSMiL.",
    "latitude": 54.467863,
    "longitude": 17.026376
  },
  {
    "id": 15,
    "name": "Niedźwiadek Micek",
    "slug": "micek",
    "folder": "micek",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "micek3.jpg",
      "gallery": [
        {
          "file": "micek1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "micek2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "micek4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty 16 września 2024 podczas obchodów 75-lecia powstania placówki.",
    "latitude": 54.470813,
    "longitude": 17.022521
  },
  {
    "id": 16,
    "name": "Niedźwiadek w Nutki",
    "slug": "w-nutki",
    "folder": "nutki",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "nutki4.jpg",
      "gallery": [
        {
          "file": "nutki1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "nutki2.jpg",
          "orientation": "portrait"
        },
        {
          "file": "nutki3.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w 2017 jako jeden z sześciu pierwszych niedźwiadków. Jego nazwa oraz wykonanie symbolizuje lokalizację w parku im. Chopina.",
    "latitude": 54.469676,
    "longitude": 17.030767
  },
  {
    "id": 17,
    "name": "Niedźwiadek Policyjny",
    "slug": "policyjny",
    "folder": "policyjny",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "policyjny3.jpg",
      "gallery": [
        {
          "file": "policyjny1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "policyjny2.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w 2019 jako projekty spod rąk uczniów Liceum Plastycznego w Słupsku.",
    "latitude": 54.474527,
    "longitude": 17.014148
  },
  {
    "id": 18,
    "name": "Niedźwiadek Poranek",
    "slug": "poranek",
    "folder": "poranek",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "poranek2.jpg",
      "gallery": [
        {
          "file": "poranek1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "poranek3.jpg",
          "orientation": "portrait"
        },
        {
          "file": "poranek4.jpg",
          "orientation": "landscape"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w 2017 jako jeden z sześciu pierwszych niedźwiadków. Przedstawia misia zajadającego pizzę. Stworzony jako humorystyczny ukłon w stronę słupskiej tradycji kulinarnej – to właśnie w „Poranku” powstała pierwsza pizzeria w Polsce (działająca od 1975 r.).",
    "latitude": 54.467238,
    "longitude": 17.023986
  },
  {
    "id": 19,
    "name": "Niedźwiadek Przyjaźni Polsko-Amerykańskiej",
    "slug": "przyjazni-polsko-amerykanskiej",
    "folder": "przyjazniUSA",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "usa2.jpg",
      "gallery": [
        {
          "file": "usa1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "usa3.jpg",
          "orientation": "landscape"
        },
        {
          "file": "usa4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w lipcu 2020, bez wstęg i uroczystości z powodu pandemii. Powstał jako symbol przyjaźni między żołnierzami amerykańskimi oraz polskimi, którzy stacjonują m.in. w bazie w Redzikowie czy Lędowie.",
    "latitude": 54.467196,
    "longitude": 17.026556
  },
  {
    "id": 20,
    "name": "Niedźwiadek Fundacji Przystań",
    "slug": "fundacji-przystan",
    "folder": "przystan",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "przystan2.jpg",
      "gallery": [
        {
          "file": "przystan1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "przystan3.jpg",
          "orientation": "landscape"
        },
        {
          "file": "przystan4.jpg",
          "orientation": "portrait"
        },
        {
          "file": "przystan5.jpg",
          "orientation": "landscape"
        }
      ]
    },
    "description": "Odsłonięty 21 marca 2024 podczas wydarzenia „CuDowna Wiosna” w Światowy Dzień Osób z Zespołem Downa.",
    "latitude": 54.46608,
    "longitude": 17.028704
  },
  {
    "id": 21,
    "name": "Niedźwiadek Witkacy",
    "slug": "witkacy",
    "folder": "ratusz",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "ratusz2.jpg",
      "gallery": [
        {
          "file": "ratusz1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "ratusz3.jpg",
          "orientation": "landscape"
        },
        {
          "file": "ratusz4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w marcu 2018, został pokryty kolorowym kolażem nawiązującym do oryginalnych dzieł Stanisława Ignacego Witkiewicza (Witkacego).",
    "latitude": 54.464541,
    "longitude": 17.026853
  },
  {
    "id": 22,
    "name": "Niedźwiadek Rybomiś",
    "slug": "rybomis",
    "folder": "rybomis",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "rybomis2.jpg",
      "gallery": [
        {
          "file": "rybomis1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "rybomis3.jpg",
          "orientation": "landscape"
        },
        {
          "file": "rybomis4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w 2017 jako jeden z sześciu pierwszych niedźwiadków. Ozdobiony motywem rybich łusek. Powstał, aby symbolizować bliskość natury, rzeki Słupi oraz bogactwo wodne regionu.",
    "latitude": 54.459159,
    "longitude": 17.039224
  },
  {
    "id": 23,
    "name": "Niedźwiadek Cechu Rzemiosła",
    "slug": "cechu-rzemiosla",
    "folder": "rzemiosla",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "cech3.jpg",
      "gallery": [
        {
          "file": "cech1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "cech2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "cech4.jpg",
          "orientation": "landscape"
        },
        {
          "file": "cech5.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty 12 kwietnia 2025 z okazji obchodów 80-lecia Cechu Rzemiosł Różnych w Słupsku. Jest darem Miasta Słupska dla rzemieślników.",
    "latitude": 54.466819,
    "longitude": 17.03229
  },
  {
    "id": 24,
    "name": "Niedźwiadek Słów",
    "slug": "slow",
    "folder": "slow",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "slow1.jpg",
      "gallery": [
        {
          "file": "slow2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "slow3.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty 20 kwietnia 2023 z okazji obchodów 70-lecia powstania placówki.",
    "latitude": 54.465847,
    "longitude": 17.024096
  },
  {
    "id": 25,
    "name": "Niedźwiadek Emeryt SOK",
    "slug": "emeryt-sok",
    "folder": "sokemeryt",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "emeryt2.jpg",
      "gallery": [
        {
          "file": "emeryt1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "emeryt3.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Dawny niedźwiadek SOKu, obecnie na zasłużonej emeryturze, rezyduje na wewnętrznym patio ośrodka.",
    "latitude": 54.469768,
    "longitude": 17.000881
  },
  {
    "id": 26,
    "name": "Niedźwiadek Tęczowy",
    "slug": "teczowy",
    "folder": "teczowy",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "teczowy4.jpg",
      "gallery": [
        {
          "file": "teczowy1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "teczowy2.jpg",
          "orientation": "portrait"
        },
        {
          "file": "teczowy3.jpg",
          "orientation": "landscape"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w 2023 i jest symbolem Teatru Lalki 'Tęcza'. Pomalowany w jaskrawe, tęczowe barwy. Jego celem jest witanie najmłodszych widzów teatru lalek oraz symbolizowanie dziecięcej radości, wyobraźni i magii teatru.",
    "latitude": 54.466505,
    "longitude": 17.029895
  },
  {
    "id": 27,
    "name": "Niedźwiadek Tolerancji",
    "slug": "tolerancji",
    "folder": "tolerancji",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "tolerancji3.jpg",
      "gallery": [
        {
          "file": "tolerancji1.jpg",
          "orientation": "portrait"
        },
        {
          "file": "tolerancji2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "tolerancji4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty w 2017, jako jeden z pierwszych sześciu w całym projekcie Niedźwiadków Szczęścia. Powstał jako społeczny manifest promujący otwartość, szacunek dla inności, akceptację i wzajemne zrozumienie wśród mieszkańców Słupska.",
    "latitude": 54.464575,
    "longitude": 17.028911
  },
  {
    "id": 28,
    "name": "Niedźwiadek Trzy Fale",
    "slug": "trzy-fale",
    "folder": "trzyfale",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "trzyfale3.jpg",
      "gallery": [
        {
          "file": "trzyfale1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "trzyfale2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "trzyfale4.jpg",
          "orientation": "portrait"
        },
        {
          "file": "trzyfale5.jpg",
          "orientation": "landscape"
        },
        {
          "file": "trzyfale6.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Odsłonięty 2 czerwca 2025, przedstawiający maskotkę Parku Wodnego - Flaminga o imieniu Falek.",
    "latitude": 54.481374,
    "longitude": 17.011085
  },
  {
    "id": 29,
    "name": "Niedźwiadek Uniwersytecki",
    "slug": "uniwersytecki",
    "folder": "uniwersytet",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "upsl3.jpg",
      "gallery": [
        {
          "file": "upsl1.jpg",
          "orientation": "landscape"
        },
        {
          "file": "upsl2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "upsl4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek został odsłonięty podczas Juwenaliów 16 maja 2018. Jest to jego drugie wcielenie - wcześniej był cały czarny.",
    "latitude": 54.461051,
    "longitude": 17.048343
  },
  {
    "id": 30,
    "name": "Niedźwiadek Wika",
    "slug": "wika",
    "folder": "wika",
    "status": "",
    "imageLayout": "landscape",
    "images": {
      "main": "wika1.jpg",
      "gallery": [
        {
          "file": "wika2.jpg",
          "orientation": "landscape"
        },
        {
          "file": "wika3.jpg",
          "orientation": "landscape"
        },
        {
          "file": "wika4.jpg",
          "orientation": "portrait"
        }
      ]
    },
    "description": "Niedźwiadek odsłonięty w 2025 na 20-lecie istnienia firmy. Co ciekawe, firma ta tworzy odlewy samych figurek. Ten dokładnie niedźwiadek został pomalowany przez uczniów SP w Bierkowie (gdzie uczęszcza wiele uczniów, których rodzice są pracownikami Faser Plast).",
    "latitude": 54.48723,
    "longitude": 17.002705
  }
];
