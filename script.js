document.getElementById('testBtn').addEventListener('click', () => {
  
  // Kullanıcı girdisini al
  const inputElement = document.getElementById('userInput'); 
  const input = inputElement ? inputElement.value.trim() : ""; // Eğer input varsa al, yoksa boş string yap
  const statusDiv = document.getElementById('status'); // Mesaj alanını al

  // Eğer giriş boşsa hata mesajı göster
  if (!input) {
    showMessage("Lütfen bir metin girin!", "error");
    return;
  }

  showMessage("Veri gönderiliyor...", "info");

  fetch("https://script.google.com/macros/s/AKfycbxr0hmZbhGVJm7wTICjx8hWGj2aQy16r6FAsaodAkUdWF35IXPbxWIOemFHxf0Y-k_g/exec", {
    method: "POST",
    mode: "cors",
    credentials: "omit",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        prompt: input,
        completion: "GitHub Pages üzerinden gönderildi."
    })
  })
  .then(response => response.json()) 
  .then(data => {
      console.log("📌 API Yanıtı:", data);
      if (data.message) {
          showMessage("✅ Başarıyla gönderildi: " + data.message, "success");
      } else {
          throw new Error(data.error || "Bilinmeyen hata!");
      }
  })
  .catch(err => {
      console.error("🚨 Fetch Hatası:", err.message);
      showMessage("❌ Hata: " + err.message, "error");
  });

}); // **EKSİK KAPATMA PARANTEZİ OLABİLİR!**

function showMessage(message, type) {
  const statusDiv = document.getElementById('status');
  statusDiv.innerHTML = message;
  statusDiv.className = type; // CSS sınıfını güncelle
  statusDiv.style.display = "block"; // Görünür yap
}
