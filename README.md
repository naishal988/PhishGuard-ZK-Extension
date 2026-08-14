# 🛡️ PhishGuard ZK: Browser Extension (v2.0)
> **Real-Time, Zero-Knowledge AI Phishing Detection Engine**

![Version](https://img.shields.io/badge/Version-2.0.0-00f5ff?style=for-the-badge&logo=rocket)
![License](https://img.shields.io/badge/License-Proprietary_/_All_Rights_Reserved-ff006e?style=for-the-badge)
![Architecture](https://img.shields.io/badge/Architecture-Zero--Trust-8338ec?style=for-the-badge)
![AI Engine](https://img.shields.io/badge/AI-Groq_Llama_3.1-06ffa5?style=for-the-badge)

---

## ⛔ Copyright & Proprietary License Notice

**Created and Developed with immense effort and passion by Naishal Nadiya ([naishal988](https://github.com/naishal988)).**

> ⚠️ **STRICT POLICY ON CLONING & FORKING:**  
> This project represents original research, custom architecture, and hours of hard work. **Unauthorized cloning, public forking, re-uploading, or redistributing this codebase for personal gain or commercial use without explicit permission is strictly prohibited.**  
> *All rights reserved © 2026 Naishal Nadiya.*

---

## 🔥 Core Features

* **🖱️ Right-Click Context Menu:** Instantly scan any link on any webpage by right-clicking and selecting *"Scan link with PhishGuard ZK"*. Get native browser notifications instantly.
* **⚡ 4-Layer Waterfall Threat Engine:**
  * **Layer 0 (Smart Contextual Whitelist):** Instant bypass for globally verified platforms (Google, GitHub, Developer Portfolios) eliminating false positives.
  * **Layer 1 & 2 (Global Threat Intel):** Pre-filters URLs against live PhishTank & OpenPhish feeds to neutralize known malicious URLs in milliseconds.
  * **Layer 3 (Zero-Day AI Threat Hunter):** Groq-powered Llama 3.1 model running strict zero-trust prompts to detect Punycode attacks, IDN homographs, raw IP obfuscation, and credential inclusion tricks (`@` symbol).
* **🕵️‍♂️ Zero-Knowledge Privacy:** Zero data retention. Raw target URLs are permanently scrubbed from memory after analysis; only cryptographic SHA-256 ZK-hashes hit the ledger.
* **🎨 Cyberpunk V2 UI:** Glassmorphism mini-dashboard with glowing threat-level gauges, live status indicators, and sleek dark mode aesthetics.

---

## 🚀 Installation Guide (Developer Mode)

You can load and run this extension locally for free across all major Chromium browsers and Firefox:

### 1️⃣ Google Chrome & Brave
1. Download or clone the official source package from this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle switch in the top right).
4. Click **Load unpacked** (top left) and select the `PhishGuard-Extension` folder.
5. Pin the 🛡️ icon to your extensions toolbar!

### 2️⃣ Microsoft Edge
1. Navigate to `edge://extensions/`.
2. Toggle **Developer mode** in the left sidebar menu.
3. Click **Load unpacked** and select the extension directory.

### 3️⃣ Mozilla Firefox
1. Navigate to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**
3. Select the `manifest.json` file inside the extension folder.

---

## 🧠 System Architecture & Data Flow
[ Target URL ]
│
├──> (Layer 0) Smart Whitelist Check ──> [ SAFE: Bypass AI ]
│
├──> (Layer 1 & 2) PhishTank / OpenPhish ──> [ THREAT: Instant Block ]
│
└──> (Layer 3) URL Feature Extraction + Groq Llama 3.1 AI
│
├──> Scrub Raw Data from RAM
└──> Return ZK-Proof Hash & Threat Verdict

---

## 💻 Tech Stack

* **Extension Engine:** Vanilla JavaScript (ES6+), Manifest V3, Web Extension APIs
* **UI/UX:** Custom CSS3 (Cyberpunk Glassmorphism), HTML5
* **Backend API:** Python 3.11, Flask, SQLite3, `tldextract`, `requests`
* **AI Model:** Groq API (`llama-3.1-8b-instant`) @ Temperature 0.0

---

<p align="center">
  <b>PhishGuard ZK v2.0</b> — Architected & Engineered by <b>Naishal Nadiya</b>.<br>
</p>
