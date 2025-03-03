// Butona tıklanınca Google Apps Script'e POST atar
document.getElementById('testBtn').addEventListener('click', () => {
  
  const input = document.getElementById('userInput').value.trim(); // Kullanıcı girdisini al
  const statusDiv = document.getElementById('status'); // Mesaj alanını al

  // Eğer giriş boşsa hata mesajı göster
  if (!input) {
    showMessage("Lütfen bir metin girin!", "error");
    return;
  }

  showMessage("Veri gönderiliyor...", "info");

  fetch("https://script.google.com/macros/s/AKfycbwUBiW7SyX4Y36kVADSv2vQbzWzcRnKsFMgNuiNt0dH8Q8GErpsXMLGSPI8soINV34/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: input,
      completion: "GitHub Pages üzerinden gönderildi."
    })
  })
  .then(response => response.json()) // JSON olarak yanıtı al
  .then(data => {
    if (data.message) {
      showMessage("✅ Başarıyla gönderildi: " + data.message, "success");
    } else {
      throw new Error(data.error || "Bilinmeyen hata!");
    }
  })
  .catch(err => {
    showMessage("❌ Hata: " + err.message, "error");
  });
});

// Ekrana mesaj yazdırma fonksiyonu
function showMessage(message, type) {
  const statusDiv = document.getElementById('status');
  statusDiv.innerHTML = message;
  statusDiv.className = type; // CSS sınıfını güncelle
  statusDiv.style.display = "block"; // Görünür yap
}

