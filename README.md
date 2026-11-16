# IT Track Institute — Website

Apple-style, single-page website. Plain HTML/CSS/JS, so there is no build step.

## Folder structure

```
Center_Website/
├── index.html              ← all page content
├── css/
│   └── style.css           ← design, colours, animations, mobile layout
├── js/
│   └── main.js             ← AI network background, typing code, carousel, counters, WhatsApp form
├── assets/
│   ├── favicon.png         ← browser tab icon (from the logo)
│   └── images/             ← logo-white.png + your academy photos
│       ├── lab-overview.jpg      lab-classroom.jpg
│       ├── career-session.jpg    ai-seminar.jpg
│       ├── live-ai-demo.jpg      code-mentoring.jpg
│       ├── python-student.jpg    vscode-students.jpg
│       ├── girls-batch.jpg       girls-session.jpg
│       └── girls-pair.jpg
├── sw.js               ← Monetag service worker (must stay at the site root, named sw.js)
├── CNAME               ← custom domain for GitHub Pages
└── README.md

Monetag ad tag (zone 311000) is in the <head> of index.html.
```

## Before going live, edit these

1. **WhatsApp**: already set to 0333-7338578 (`WHATSAPP_NUMBER` in `js/main.js`, plus the `wa.me` / `tel:` links in `index.html`). To change it, update all of these.
2. **Address and hours**: in `index.html`, search for `TODO` in the Contact section.
3. **Stats**: in `index.html`, search for `data-count`. Change 500 / 7 / 100 to your real numbers.
4. **Social links**: in the footer, replace the `href="#"` on Facebook / Instagram / YouTube.

## Run locally

Double-click `index.html`, or run:

```
python -m http.server 5500
```

and open http://localhost:5500

## Hosting (free options)

Upload the whole folder to Netlify (drag and drop), GitHub Pages, or Vercel.
