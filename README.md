# Sami Neon Start Page — Chrome New Tab

A personal Chrome new-tab extension with a live clock, Google/URL search, neon-accented social sign-in shortcuts, and a rotating 3D-lit portrait.

## Install in Chrome

1. Download and unzip this folder.
2. Open `chrome://extensions` in Chrome.
3. Turn **Developer mode** on.
4. Click **Load unpacked** and select the unzipped `Chrome-Neon-Startpage` folder (the one containing `manifest.json`).
5. Open a new tab to see the page.

If Chrome asks you to confirm that the extension replaces New Tab, approve it. This extension only replaces the new-tab page; it does not collect passwords or account data. The social cards open the official platforms' sign-in pages in a new tab.

## Included

- `manifest.json` — Manifest V3 new-tab extension setup
- `index.html`, `style.css`, `script.js` — page, neon styling and clock/search behavior
- `assets/sami-neon.webp` — transparent portrait used for the animated neon-lit figure

The page and portrait work locally. Opening social sign-in pages and Google search require an internet connection. To edit the social shortcuts, change their `href` and labels in `index.html`.
