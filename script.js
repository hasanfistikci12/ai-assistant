document.getElementById('testBtn').addEventListener('click', () => {
  const inputEl = document.getElementById('userInput');
  const inputVal = inputEl ? inputEl.value.trim() : '';

  // Kullanıcı boş bir şey girmediyse uyar
  if (!inputVal) {
    showMessage("Lütfen bir metin girin!", "error");
    return;
  }

  // Bilgilendirme mesajı
  showMessage("Veri gönderiliyor...", "info");

  // Google Apps Script (Web App) URL'sini buraya ekle
  fetch("https://script.google.com/macros/s/AKfycbw0tlL4lP733DNJNjqy-pcP2aEzMAi0_V2X8V3uJtAoobT88jTF7omkeY8lT5w1W9M/exec", {
    method: "POST",
    mode: "cors", // CORS ayarı
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: inputVal,
      completion: "GitHub Pages'den gönderildi!"
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.message) {
      // Başarılı yanıt
      showMessage("✅ Başarıyla gönderildi: " + data.message, "success");
    } else {
      // Google Apps Script tarafında hata
      throw new Error(data.error || "Bilinmeyen hata!");
    }
  })
  .catch(err => {
    // fetch veya JSON aşamasında hata
    showMessage("❌ Hata: " + err.message, "error");
  });
});

// Ekrana mesaj yazdırma fonksiyonu
function showMessage(msg, type) {
  const statusDiv = document.getElementById('status');
  statusDiv.innerHTML = msg;
  statusDiv.className = type;
  statusDiv.style.display = "block";
}
