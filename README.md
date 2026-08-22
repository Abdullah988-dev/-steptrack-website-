# StepTrack Website

Professional one-page promotional/download website for the StepTrack mobile app.

## Tech Stack
- Next.js (App Router, JavaScript)
- Tailwind CSS
- Framer Motion (animations)
- Lucide Icons

No database, no authentication — this is a simple public landing/download site.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before deploying — set your APK download link

Open `lib/config.js` and replace:

```js
export const APK_DOWNLOAD_URL = "YOUR_APK_DOWNLOAD_URL";
```

with a real, permanent download link. Recommended: GitHub Releases, because:
- EAS build preview links expire after ~13 days
- GitHub Releases gives you a permanent, free, direct-download URL

### How to host the APK on GitHub Releases
1. Download the .apk file from your EAS build (the link from eas build --profile preview)
2. Go to your GitHub repo -> Releases -> Create a new release
3. Upload the .apk file as a release asset
4. Copy the direct asset download link (ends in .apk)
5. Paste that link into APK_DOWNLOAD_URL in lib/config.js

## Deploy to Vercel

1. Push this project to a GitHub repo (separate from your mobile app repo, or a subfolder - your choice)
2. Go to vercel.com -> New Project -> import the repo
3. Vercel auto-detects Next.js - no config needed
4. Deploy
5. Test the live URL and confirm the Download button works

## Project Structure

```
app/
  page.js        - assembles all sections
  layout.js      - SEO metadata
  globals.css
components/
  Navbar.jsx
  Hero.jsx
  About.jsx
  Features.jsx
  FeatureCard.jsx
  HowItWorks.jsx
  Screenshots.jsx
  FAQ.jsx
  DownloadCTA.jsx
  Footer.jsx
lib/
  config.js      - APK_DOWNLOAD_URL lives here (single source of truth)
```

## Notes
- Screenshots section uses recreated phone mockups (matching the real app's Steps/Water/Goals screens) since no real screenshots were provided yet. Swap in real screenshots under public/screenshots/ and update components/Screenshots.jsx whenever you have them.
- No MongoDB/backend - not needed for a static download page.
