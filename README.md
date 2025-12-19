# Trade Guard — Website

This folder is a **static marketing site** template for the Trade Guard product.

## What’s included
- Responsive, dark, professional UI
- Pages: Home, Product, Pricing, Security, Docs, Contact
- No build step: plain HTML/CSS/JS

## Run locally
Just open `index.html` in a browser, **or** use a local web server:

### Option A — Python
```bash
cd trade-guard-website
python3 -m http.server 5173
```
Then open: http://localhost:5173

### Option B — Node
```bash
cd trade-guard-website
npx serve .
```

## Customize
- Edit copy inside the `.html` pages
- Replace the logo in `assets/logo.svg`
- Connect the contact form to your backend/CRM (it’s currently a demo)
