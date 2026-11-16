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
│   ├── favicon.svg
│   └── images/             ← your academy photos
│       ├── lab-overview.jpg      lab-classroom.jpg
│       ├── career-session.jpg    ai-seminar.jpg
│       ├── live-ai-demo.jpg      code-mentoring.jpg
│       ├── python-student.jpg    vscode-students.jpg
│       ├── girls-batch.jpg       girls-session.jpg
│       └── girls-pair.jpg
└── README.md
```

## Before going live, edit these

1. **WhatsApp number**: in `js/main.js`, line 6, set `WHATSAPP_NUMBER` (e.g. `923001234567`, digits only, no `+` or `0` prefix).
2. **Phone, address and hours**: in `index.html`, search for `TODO` in the Contact section.
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
