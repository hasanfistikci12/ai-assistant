// script.js

// Bu örnek butona tıklayınca Google Apps Script'e POST atar
document.getElementById('testBtn').addEventListener('click', () => {
  fetch("https://script.google.com/macros/s/AKfycbwlcFcdaAtmXfhOr6VdB5IeWAtUwDm_hmFlzwh036Zzjc6zm49S_kszIthiIvADeylX/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: "GH-Pages test prompt",
      completion: "GH-Pages test completion"
    })
  })
  .then(response => response.text())
  .then(data => console.log("Yanıt:", data))
  .catch(err => console.error("Hata:", err));
});
