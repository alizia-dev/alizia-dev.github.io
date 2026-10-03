# Ali Zia — portfolio

Static portfolio for GitHub Pages (plain HTML, CSS and a little JavaScript; no build step).

The look and layout follow the minimalist
[devportfolio](https://ryanfitzgerald.github.io/devportfolio/) theme by Ryan Fitzgerald
([MIT-licensed source](https://github.com/RyanFitzgerald/devportfolio)): a "Hello! 👋" hero, About with skill tags,
numbered Projects, an Experience timeline, Education, and a floating section nav. This is an independent
re-creation in plain HTML/CSS; the content comes from Ali's résumé.

## Deploy

1. Create a repo named **`alizia-dev.github.io`** (gives you `https://alizia-dev.github.io`).
2. Copy every file in this folder into the repo root and push to `main`:

```bash
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/alizia-dev/alizia-dev.github.io.git
git push -u origin main
```

3. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Wait a minute or two, then open the URL.

## Editing content

Everything lives in `index.html`:

- **Hero, About, skills**: the first sections of the page.
- **Projects**: copy one `<li class="project">` block and bump the `01`, `02`… number.
- **Experience**: copy one `<li>` block inside `<ol class="timeline">`, newest first.
- **Links**: email, LinkedIn and GitHub are in the hero. Project links can be added inside a project card as `<a href="...">`.

## Customizing

- **Accent colour**: change `--accent` (and `--accent-soft`) at the top of `style.css`. Dark mode follows the visitor's system setting.
- **Social preview image**: add a 1200×630 PNG plus `<meta property="og:image" content="...">`.
- **Custom domain**: add a `CNAME` file containing the domain, set DNS records, then set it under Settings → Pages. Update the `canonical`, `og:url` and JSON-LD URLs in `index.html`.
- If you deploy as a *project* site (not `username.github.io`), change the absolute `/style.css` and `/favicon.svg` links in `404.html` to include the repo path.
