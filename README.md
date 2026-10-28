# Chipo Stefani — Digital Marketing Portfolio

A responsive one-page portfolio for **Chipo T. Stefani**, a Digital Marketing student at Uncommon.org
(Harare, Zimbabwe), built to showcase practice projects and support internship / entry-level applications.

Plain HTML, CSS and JavaScript — no build tools, frameworks or dependencies required.

## Project structure

```
chipo-portfolio/
├── index.html          # All page sections (Hero, About, Skills, Projects, Journey, Contact, Footer)
├── css/
│   └── style.css        # Full design system + responsive layout
├── js/
│   └── script.js         # Nav, scroll-reveal, mobile menu, contact form
├── images/
│   ├── favicon.svg
│   ├── project-1.svg     # Preview graphic — LinkedIn & Social Media
│   ├── project-2.svg     # Preview graphic — Digital Marketing Campaigns
│   └── project-3.svg     # Preview graphic — Brand Graphics & Visuals
├── assets/
│   └── Chipo_Stefani_CV.pdf   # Downloadable CV (linked from the Hero and Contact sections)
└── README.md
```

## Features

- Sticky "masthead" navigation with a mobile hamburger menu
- Scroll-reveal animations on section content (respects `prefers-reduced-motion`)
- Three clickable project cards that open the live Canva links in a new tab
- Contact form that opens the visitor's email client, pre-filled with their message (no backend needed)
- Fully responsive, from small phones up to large desktop screens
- Keyboard-focus styles throughout

## Editing the content

- **Project links / descriptions** — edit the three `<a class="project-card">` blocks in `index.html`
  (inside `<section id="projects">`).
- **CV file** — replace `assets/Chipo_Stefani_CV.pdf` with an updated CV, keeping the same filename
  (or update the two `href="assets/..."` links in `index.html` if you rename it).
- **Contact email/phone** — update the `mailto:` / `tel:` links in the Contact section of `index.html`.
- **Colours / fonts** — all design tokens are defined at the top of `css/style.css` under `:root`.

## Running it locally in VS Code

1. Unzip the project and open the `chipo-portfolio` folder in VS Code (`File → Open Folder…`).
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel, if you don't have it.
3. Right-click `index.html` in the file explorer and choose **"Open with Live Server"**.
4. Your default browser will open the site at a local address like `http://127.0.0.1:5500` and reload
   automatically whenever you save a change.

   *(No Live Server? You can also just double-click `index.html` to open it directly in a browser —
   everything will work except the contact form's "note" text updating instantly on some browsers due
   to local file security restrictions. Live Server avoids this.)*

## Pushing it to GitHub

1. Open a terminal in the project folder (VS Code: `Terminal → New Terminal`).
2. Initialise git and make your first commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Chipo Stefani portfolio"
   ```
3. Create a new, empty repository on [GitHub](https://github.com/new) (don't add a README there —
   you already have one).
4. Connect your local project to it and push, replacing `YOUR-USERNAME` and `YOUR-REPO`:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git branch -M main
   git push -u origin main
   ```

## Deploying on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (you can sign in with your GitHub account).
2. Click **"Add New… → Project"**.
3. Select the GitHub repository you just pushed.
4. Framework preset: choose **"Other"** (this is a static site — no build step needed).
5. Leave the build and output settings blank and click **Deploy**.
6. After a minute, Vercel gives you a live URL like `your-repo.vercel.app` — that's your portfolio, live.

Every time you push a new commit to `main`, Vercel automatically redeploys the site.

## Notes

- The three project cards link out to your Canva project pages. If you generate proper "view-only"
  Canva share links later (rather than editable links), swap them in and the cards will work exactly
  the same way.
- No experience, achievements or statistics have been invented — all content reflects the CV as
  provided: currently studying Digital Marketing at Uncommon.org, 2 A-Level and 5 O-Level passes,
  and looking for internship / entry-level opportunities.
