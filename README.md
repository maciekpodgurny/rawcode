# rawcode

minimalistyczny, mroczny blog na Jekyll + GitHub Pages + Decap CMS.

## struktura

```
.
├── _config.yml              # konfiguracja Jekylla
├── _layouts/                # szablony HTML
│   ├── default.html
│   └── post.html
├── _posts/                  # posty (Markdown) — CMS pisze tutaj
├── admin/                   # panel Decap CMS
│   ├── index.html
│   └── config.yml
├── assets/
│   ├── style.css
│   └── uploads/             # obrazki z CMS
├── index.html               # lista postów
└── about.md                 # strona about
```

## szybki start

1. Wrzuć wszystko do repo `rawcode` na GitHubie.
2. Settings → Pages → Source: `Deploy from a branch` → `main` / `/ (root)`.
3. W `admin/config.yml` zmień `repo: TWOJ-LOGIN/rawcode`.
4. Włącz OAuth: zarejestruj GitHub OAuth App (callback: `https://api.netlify.com/auth/done`) ALBO postaw własny proxy.
5. Wejdź na `https://TWOJ-LOGIN.github.io/rawcode/admin/` → Login with GitHub → pisz posty.
