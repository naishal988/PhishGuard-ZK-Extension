# 🛡️ PhishGuard ZK: Browser Extension (v2.0)
> **Real-Time, Zero-Knowledge AI Phishing Detection right in your browser.**

![Version](https://img.shields.io/badge/Version-2.0.0-00f5ff?style=for-the-badge&logo=rocket)
![Architecture](https://img.shields.io/badge/Architecture-Zero--Trust-ff006e?style=for-the-badge)
![AI Engine](https://img.shields.io/badge/AI-Groq_Llama_3.1-8338ec?style=for-the-badge)

Welcome to the **PhishGuard ZK Browser Extension**! Originally built for the MLH Midnight Hackathon, this tool has been completely overhauled into a hyper-fast, privacy-preserving browser extension. It intercepts, analyzes, and neutralizes advanced phishing threats in milliseconds without ever storing your sensitive data.

## 🔥 Key Features

* **🖱️ Right-Click Context Menu:** Found a suspicious link? Just right-click on it and select *"Scan link with PhishGuard ZK"*. The extension scans the threat in the background and delivers an instant native browser notification.
* **⚡ 4-Layer Waterfall Architecture:** 
  * **Layer 0 (Contextual Whitelist):** Hardcoded instant bypass for globally trusted sites (Google, GitHub) and verified developer profiles to ensure zero false positives and lightning-fast speeds.
  * **Layer 1 & 2 (Threat Intel):** Real-time pre-filtering using global databases (PhishTank & OpenPhish) to block known threats before they even reach the AI.
  * **Layer 3 (AI Zero-Day Hunter):** Powered by Groq's Llama 3.1 (Temperature 0.0), detecting zero-day obfuscation, typosquatting, IDN homographs, and credential inclusion tricks.
* **🕵️‍♂️ Zero-Knowledge Privacy:** We don't want your data. Raw URLs are instantly scrubbed from RAM. Only a cryptographic SHA-256 hash is generated for verifiable, blind ledger logging.
* **🎨 Cyberpunk UI:** A sleek, dark-themed, neon-glowing Glassmorphism interface featuring a dynamic threat-score meter and live terminal animations.

---

## 🚀 Installation Guide (Developer Mode)

You can run this extension for free on Chrome, Microsoft Edge, and Firefox. 

### 1️⃣ Google Chrome & Brave
1. Download this repository as a `.zip` file and extract it to a folder.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Toggle **Developer mode** ON (top right corner).
4. Click **Load unpacked** (top left) and select the extracted folder.
5. Pin the 🛡️ icon to your toolbar and you're good to go!

### 2️⃣ Microsoft Edge
1. Download and extract the repository.
2. Open Edge and navigate to `edge://extensions/`.
3. Turn on **Developer mode** in the bottom left menu.
4. Click **Load unpacked** and select the folder. 

### 3️⃣ Mozilla Firefox
1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click on **Load Temporary Add-on**.
3. Select the `manifest.json` file from the extracted folder.

---

## 🧠 How The Engine Works (Under The Hood)

When you click **"Initiate Zero-Knowledge Scan"**, the extension securely beams the target URL to our Python/Flask backend. 

The backend employs an advanced parser that uncovers hidden evasion tactics (like URL shortening, Punycode `xn--` translation, and Hex/Octal IP obfuscation) before feeding the structured context to the strict, hyper-paranoid Llama-3.1 engine. The result is calculated, the data is scrubbed, and the threat score is beamed back to your browser popup.

---

## 💻 Tech Stack
* **Extension Frontend:** HTML5, CSS3 (Cyberpunk V2 Theme), Vanilla JavaScript.
* **Backend API:** Python, Flask, SQLite.
* **AI Engine:** Groq API (Llama-3.1-8b-instant).
* **Blockchain / Ledger:** Midnight Compact Architecture (Concept).

---
<p align="center">
  <i>Built with ⚡ for a safer, private web by <b>Naishal (naishalcybersec)</b> & <b>Sruthika</b>.</i>
</p>
