# Hitarth Gupta — Portfolio

A modern, interactive portfolio for a Senior Frontend Engineer. Built with **React 18 + Vite**, fully SEO-optimized, and structured so every piece of content lives in a single editable place.

---

## ✨ Features

- ⚛️ **React 18 + Vite** — fast dev server, instant HMR, optimized builds
- 🎨 **Modular CSS** — every component has its own `.css` file (no inline styles, no styling spaghetti)
- 📦 **Single-source-of-truth data files** — edit projects, skills, experience, and personal info in `/src/data/`
- 🔍 **SEO-ready** — meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap.xml, robots.txt
- 🎯 **Dynamic SEO** with `react-helmet-async`
- 🖱️ **Custom magnetic cursor** with hover states
- 🎬 **Scroll-triggered animations** via IntersectionObserver
- 📱 **Fully responsive** — mobile-first breakpoints
- ♿ **Accessible** — semantic HTML, ARIA labels, proper landmarks
- 🚀 **Zero-config deployment** to Vercel, Netlify, or GitHub Pages

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run dev server

```bash
npm run dev
```

Opens at `http://localhost:5173`.

### 3. Build for production

```bash
npm run build
```

Output goes to `/dist`. To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
hitarth-portfolio/
├── public/                    Static assets (favicon, robots, sitemap)
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/            All React components + their CSS
│   │   ├── Navbar.jsx + Navbar.css
│   │   ├── Hero.jsx + Hero.css
│   │   ├── About.jsx + About.css
│   │   ├── Skills.jsx + Skills.css
│   │   ├── Projects.jsx + Projects.css
│   │   ├── Experience.jsx + Experience.css
│   │   ├── Contact.jsx + Contact.css
│   │   ├── Footer.jsx + Footer.css
│   │   ├── Marquee.jsx + Marquee.css
│   │   ├── Cursor.jsx + Cursor.css
│   │   └── SEO.jsx
│   ├── data/                  ⭐ EDIT YOUR CONTENT HERE
│   │   ├── personal.js        name, email, phone, hero stats, about
│   │   ├── projects.js        all your projects
│   │   ├── skills.js          tech stack categories
│   │   └── experience.js      work history + nav links
│   ├── hooks/                 Reusable logic
│   │   ├── useScrollReveal.js
│   │   └── useCustomCursor.js
│   ├── styles/
│   │   └── globals.css        🎨 Design tokens, colors, fonts
│   ├── App.jsx
│   └── main.jsx
├── index.html                 Static SEO meta tags + JSON-LD
├── package.json
├── vite.config.js
├── vercel.json                Vercel deploy config
└── netlify.toml               Netlify deploy config
```

---

## ✏️ How to Customize

### Change your personal info (name, email, phone, etc.)

→ Edit `src/data/personal.js`

### Add / remove / edit a project

→ Edit `src/data/projects.js` — add a new object to the `projects` array. The site auto-renders it.

```js
{
  domain: 'Your domain · Your category',
  title: 'Project name',
  desc: 'One or two sentences describing impact.',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  link: 'https://link-to-project.com',  // leave '' if no public link
  year: '2026',
  featured: false,
}
```

### Add / remove skills

→ Edit `src/data/skills.js`

### Edit work experience

→ Edit `src/data/experience.js`

### Change colors, fonts, spacing

→ Edit the CSS variables at the top of `src/styles/globals.css`:

```css
:root {
  --bg: #0e0d0b;          /* background */
  --accent: #ff7a1a;       /* main accent color */
  --serif: 'Fraunces', serif;
  --mono: 'JetBrains Mono', monospace;
  --display: 'Bricolage Grotesque', sans-serif;
}
```

Want a different palette? Try:
- **Sage green** — `--accent: #7ab87a`
- **Electric blue** — `--accent: #4d9eff`
- **Coral red** — `--accent: #ff5c5c`

### Edit the hero headline

→ Open `src/components/Hero.jsx` and modify the `<h1 className="hero-title">` block.

### Update SEO meta tags

→ Edit `index.html` (static fallback) and `src/components/SEO.jsx` (dynamic).
Also update `public/sitemap.xml` and `public/robots.txt` with your final domain.

---

## 🌐 Deployment Guide

You have three excellent free options. **Vercel is the easiest.**

### Option 1: Vercel (Recommended — 2 minutes) ⭐

1. **Push your code to GitHub** (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub.
3. Click **"Add New Project"** → Import your repo.
4. Vercel auto-detects Vite. Click **Deploy**.
5. Your site is live at `https://your-project.vercel.app`.
6. **Custom domain:** Settings → Domains → Add your domain (e.g., `hitarthgupta.dev`).

**Bonus:** Every git push auto-deploys. PRs get preview URLs.

### Option 2: Netlify (Equally easy)

1. Push code to GitHub.
2. Go to [netlify.com](https://netlify.com) and sign up.
3. **"Add new site"** → **"Import an existing project"** → connect GitHub repo.
4. Build settings auto-fill from `netlify.toml`. Click **Deploy**.
5. Site live at `https://your-project.netlify.app`.
6. **Custom domain:** Domain settings → Add custom domain.

### Option 3: GitHub Pages (Free, slightly more manual)

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://your-username.github.io/hitarth-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.js`, set `base: '/hitarth-portfolio/'`.
4. Run `npm run deploy`.
5. In your repo on GitHub: Settings → Pages → Source: `gh-pages` branch.

---

## 🌍 Get a Custom Domain

A custom domain (e.g., `hitarthgupta.dev`) signals professionalism — much stronger for freelance pitches than a `*.vercel.app` URL.

**Where to buy:**
- **Namecheap** — ~₹1,000/yr for `.com`, ~₹1,500/yr for `.dev`
- **Google Domains / Squarespace Domains** — similar pricing
- **GoDaddy** — slightly more expensive

**How to connect:**
1. Buy domain → get DNS access.
2. In Vercel/Netlify dashboard → Domains → Add domain → enter your domain.
3. Vercel/Netlify shows you DNS records to add (usually an A record + CNAME).
4. In your domain registrar's DNS panel → add those records.
5. Wait 10 minutes to a few hours for propagation. Done.

**Recommended TLDs for a developer:**
- `.dev` — clean, signals developer
- `.com` — universal, most trusted
- `.io` — popular in tech circles
- `.me` — personal brand feel

---

## 📈 SEO Checklist

Before deploying to production:

- [ ] Update `index.html` — replace `https://hitarthgupta.dev/` with your real domain
- [ ] Update `public/sitemap.xml` with your real domain
- [ ] Update `public/robots.txt` with your real sitemap URL
- [ ] Create an OG image (1200×630px) and place at `public/og-image.png`
- [ ] Update JSON-LD in `index.html` with your real social profile URLs
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Add your site to [Bing Webmaster Tools](https://www.bing.com/webmasters)

---

## 🧰 Tech Stack

| Layer       | Tool                  |
| ----------- | --------------------- |
| Framework   | React 18              |
| Build tool  | Vite 5                |
| SEO         | react-helmet-async    |
| Styling     | CSS Modules (per-component) |
| Animations  | CSS + IntersectionObserver |
| Fonts       | Google Fonts (Fraunces, JetBrains Mono, Bricolage Grotesque) |
| Hosting     | Vercel / Netlify      |

---

## 📜 License

Personal portfolio — feel free to use the structure as a template, but please replace all personal content (name, projects, experience) with your own.

---

## 💌 Contact

**Hitarth Gupta**
Senior Frontend Engineer | React.js & React Native
📧 hitarthgupta1@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/hitarthgupta03/)
📍 Gurugram, India
