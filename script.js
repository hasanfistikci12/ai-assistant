document.getElementById('testBtn').addEventListener('click', () => {
  
  // Kullanıcı girdisini al
  const inputElement = document.getElementById('userInput');
  const input = inputElement ? inputElement.value.trim() : ""; // Eğer input alanı varsa al, yoksa boş string yap
  const statusDiv = document.getElementById('status'); // Mesaj alanını al

  // Eğer giriş boşsa hata mesajı göster
  if (!input) {
    showMessage("Lütfen bir metin girin!", "error");
    return;
  }

  showMessage("Veri gönderiliyor...", "info");

  fetch("https://script.google.com/macros/s/AKfycbxxOfaGymZAjql6dNN6pxMvnx0zVvCkadZSABs5X1rj8qrFE6IIv_xIxI-TcFMdvj3f/exec", {
    method: "POST",
    mode: "cors", // CORS'u aç
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: input,
      completion: "GitHub Pages üzerinden gönderildi."
    })
  })
  .then(response => response.text()) // JSON yerine text olarak al
  .then(text => {
    console.log("📌 Gelen Yanıt:", text); // Konsola gelen yanıtı yazdır
    try {
      const data = JSON.parse(text);  // JSON'a çevir
      if (data.message) {
        showMessage("✅ Başarıyla gönderildi: " + data.message, "success");
      } else {
        throw new Error(data.error || "Bilinmeyen hata!");
      }
    } catch (err) {
      throw new Error("Geçersiz yanıt formatı: " + text);
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
