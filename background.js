const PROD_API = "https://phishguard-backend-n7rj.onrender.com/api/scan";

// Create right-click context menu
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "scanLinkZK",
        title: "🛡️ Analyze with PhishGuard ZK Engine",
        contexts: ["link"]
    });
});

// Handle right-click action
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "scanLinkZK" && info.linkUrl) {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "PhishGuard ZK",
            message: "Initializing Zero-Knowledge Scan..."
        });

        fetch(PROD_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url_to_scan: info.linkUrl })
        })
        .then(response => response.json())
        .then(data => {
            let msg = data.is_phishing 
                ? "⚠️ THREAT DETECTED: " + data.reason 
                : "✅ VERIFIED SAFE: Target matches clean operational baselines.";
            
            chrome.notifications.create({
                type: "basic",
                iconUrl: "icon.png",
                title: data.is_phishing ? "Critical Threat Blocked" : "Zero-Trust Verified",
                message: msg
            });
        })
        .catch(err => {
            chrome.notifications.create({
                type: "basic",
                iconUrl: "icon.png",
                title: "System Error",
                message: "Connection to ZK Ledger failed."
            });
        });
    }
});