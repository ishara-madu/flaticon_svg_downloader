# SVG Downloader for Flaticon™ - Free Vector Icons & Stickers Exporter

<p align="center">
  <img src="icons/128.png" alt="SVG Downloader for Flaticon Logo" width="128" height="128" />
</p>

<p align="center">
  <strong>Fast, unlimited, and high-quality SVG vector icon & sticker downloader for Flaticon.</strong>
</p>

<p align="center">
  <a href="#privacy"><img src="https://img.shields.io/badge/Privacy-100%25%20Local-success?style=flat-square" alt="Privacy First" /></a>
  <img src="https://img.shields.io/badge/Manifest-V3%20Ready-blue?style=flat-square" alt="Manifest V3" />
  <img src="https://img.shields.io/badge/Version-0.2.0-orange?style=flat-square" alt="Version 0.2.0" />
  <img src="https://img.shields.io/badge/Platform-Chrome%20%7C%20Edge%20%7C%20Brave-informational?style=flat-square" alt="Browser Support" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License" />
</p>

---

## 📖 Overview

**SVG Downloader for Flaticon** is a lightweight, privacy-focused Chrome Extension (Manifest V3) designed for designers, developers, and creators. It allows you to download and copy any icon or sticker from [Flaticon](https://www.flaticon.com) in crystal-clear, scalable SVG vector format directly into your workflow without arbitrary limits or barriers.

Whether you are designing in **Figma**, **Sketch**, **Adobe XD**, or coding in **VS Code**, get scalable SVGs with a single click.

---

## ✨ Features

- ⚡ **Direct SVG Download**: Download any standard icon or animated/static sticker in pure `.svg` format with a single click.
- 📋 **One-Click "Copy SVG" to Clipboard**: Copy raw SVG vector code straight to your clipboard — paste directly into Figma, Illustrator, or HTML/JSX code.
- 🎨 **In-Browser Editor Support**: Customized colors or adjusted strokes inside Flaticon's built-in editor? Download your modified SVG effortlessly.
- 🔍 **Search & Category Grid Buttons**: Injects quick SVG download buttons right on the icon cards in search results and related collections.
- 🚀 **Zero Clutter & Lightweight**: Runs quietly with no background resource drain; activates only when you visit Flaticon.
- 🛡️ **100% Private & Client-Side**: No data leaves your machine. No analytics, no cookies, no tracking.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [How It Works](#-how-it-works)
- [Installation Guide](#-installation-guide)
- [How to Use](#-how-to-use)
- [Permissions](#-permissions)
- [Privacy Policy](#privacy)
- [SEO & Discovery Keywords](#-seo--discovery-keywords)
- [Frequently Asked Questions (FAQ)](#-frequently-asked-questions-faq)
- [Disclaimer](#-disclaimer)
- [License](#-license)

---

## 🔍 How It Works

1. **Flaticon Integration**: The extension runs only on `flaticon.com` and `flaticon.es`.
2. **Account Authentication Check**: Flaticon's backend serves raw vector data when a user is signed in to a free Flaticon account. The extension checks if you are signed in; if not, a small reminder prompts you to log in.
3. **Smart Injection**: Replaces disabled/restricted download buttons with native, clean SVG exporter buttons.
4. **Local Processing**: All SVG XML formatting and downloads are handled on-the-fly directly inside your browser.

---

## 🚀 Installation Guide

### Option 1: Load as Unpacked Extension (Developer Mode)

1. Clone or download this repository to your computer:
   ```bash
   git clone https://github.com/your-username/flaticon_svg_downloader.git
   ```
2. Open Google Chrome (or Chromium-based browsers like Edge, Brave, Opera, Vivaldi).
3. Navigate to the Extensions page:
   ```text
   chrome://extensions/
   ```
4. Enable **Developer mode** using the toggle switch in the top-right corner.
5. Click the **Load unpacked** button in the top-left corner.
6. Select the `flaticon_svg_downloader` project folder (the folder containing `manifest.json`).
7. The extension icon will now appear in your browser toolbar!

### Option 2: Chrome Web Store (Coming Soon)

Once published, you will be able to install it directly with one click from the Chrome Web Store.

---

## 🎯 How to Use

### 1. Downloading from an Icon Detail Page
1. Visit any icon page on [Flaticon](https://www.flaticon.com).
2. Ensure you are signed in with your free Flaticon account.
3. You will see an active **"SVG :)"** button where the download options are located.
4. Click the button to instantly save the `.svg` file to your computer.

### 2. Copying SVG Code Directly to Clipboard
1. On the icon detail page, look for the **"Copy SVG"** button.
2. Click it to copy the clean SVG vector code.
3. Switch to **Figma**, **Adobe Illustrator**, or your code editor and press `Ctrl+V` / `Cmd+V` to paste the vector graphic immediately.

### 3. Downloading Edited Icons
1. Click the **"Edit icon"** button on Flaticon to customize colors or stroke.
2. In the format popover, select the enhanced **SVG** button to download your customized artwork.

### 4. Downloading from Search Results
1. Search for any topic on Flaticon.
2. Hover over any icon in the search results or related grid.
3. Click the SVG download button on the card to grab the file without opening a new tab.

---

## 🔒 Permissions

The extension requests only the minimum necessary permissions required for its single purpose:

| Host / Permission | Purpose |
|-------------------|---------|
| `https://*.flaticon.com/*` | Allows content scripts to add the SVG download buttons and fetch vector data when browsing Flaticon. |
| `https://*.flaticon.es/*` | Provides the same functionality for the Spanish language version of Flaticon. |

*Note: No broad permissions like `<all_urls>`, `tabs`, `storage`, or background listeners are requested.*

---

<!-- Explicit anchors for direct link navigation (#privacy and #pricavy) -->
<a id="privacy"></a>
<a id="pricavy"></a>

## 🛡️ Privacy Policy

**Last Updated:** October 2026

We believe your privacy is fundamental. This Privacy Policy outlines our commitment to transparency and user privacy for the **SVG Downloader for Flaticon** Chrome Extension.

### 1. Zero Data Collection
- **SVG Downloader for Flaticon** does **NOT** collect, harvest, store, or transmit any personally identifiable information (PII).
- We do not collect passwords, names, email addresses, IP addresses, browsing histories, or user behavior analytics.

### 2. Local Processing Only
- All interactions, script injections, SVG serialization, and file downloads execute **100% locally** on your device within your own browser session.
- The extension does not communicate with any external servers, third-party APIs, or analytics platforms.

### 3. Third-Party Services & Tracking
- **No Analytics:** We do not use Google Analytics, telemetry, or external tracking libraries.
- **No Advertising:** We do not serve ads or affiliate redirects.
- **No Cookies:** We do not set or read any cookies.

### 4. Network Requests
- The only network requests made by the extension are direct requests to Flaticon's official endpoints (`flaticon.com` / `flaticon.es`) to fetch the requested SVG data when you actively initiate a download. These requests use your existing browser session and are subject to Flaticon's standard terms and privacy policies.

### 5. Policy Updates & Inquiries
- Any updates to this policy will be documented in this repository.
- If you have questions or concerns regarding privacy, feel free to open an issue on the [GitHub Issues](https://github.com/your-username/flaticon_svg_downloader/issues) page.

---

## 🔎 SEO & Discovery Keywords

For optimal discoverability across Google, Chrome Web Store, and GitHub search:

- **Primary Keywords:** `flaticon svg downloader`, `flaticon downloader`, `download svg flaticon`, `flaticon free svg`, `flaticon icon downloader`, `flaticon sticker downloader`
- **Secondary Keywords:** `svg vector exporter`, `free vector icons`, `copy svg to figma`, `flaticon to figma`, `vector icon downloader`, `chrome extension svg downloader`, `web designer tools`, `manifest v3 icon downloader`
- **GitHub Repository Topics:** `flaticon`, `flaticon-downloader`, `svg-downloader`, `chrome-extension`, `manifest-v3`, `vector-icons`, `figma-tools`, `stickers-downloader`, `graphic-design`, `developer-tools`

---

## ❓ Frequently Asked Questions (FAQ)

<details>
<summary><strong>Why do I need to log into a free Flaticon account?</strong></summary>

Flaticon’s backend only generates the SVG vector stream when a valid user session is present. Creating a free account on Flaticon takes 10 seconds, and once logged in, this extension allows you to download and copy SVGs seamlessly.
</details>

<details>
<summary><strong>Can I paste SVGs directly into Figma?</strong></summary>

Yes! Click the **"Copy SVG"** button on any icon detail page, switch to Figma, and press `Ctrl+V` (or `Cmd+V` on Mac). The icon will be pasted as fully editable vector vectors with organized layers.
</details>

<details>
<summary><strong>Does this extension slow down my browser?</strong></summary>

Not at all. The extension contains no background workers and only runs lightweight content scripts when visiting Flaticon web pages.
</details>

<details>
<summary><strong>Is this extension safe?</strong></summary>

Yes, 100%. The code is open source and contains no obfuscated scripts, no remote code execution, and no data tracking.
</details>

---

## ⚠️ Disclaimer

- This extension is an independent open-source project and is **not affiliated, associated, authorized, endorsed by, or in any way officially connected** with Flaticon, Freepik Company, or any of their subsidiaries or affiliates.
- The name "Flaticon" as well as related names, marks, emblems, and images are registered trademarks of their respective owners.
- Users are responsible for complying with Flaticon's terms of service and licensing requirements regarding icon attribution and commercial use.

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).
