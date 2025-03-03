fetch("https://script.google.com/macros/s/AKfycbxxOfaGymZAjql6dNN6pxMvnx0zVvCkadZSABs5X1rj8qrFE6IIv_xIxI-TcFMdvj3f/exec", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: input,
      completion: "GitHub Pages üzerinden gönderildi."
    })
})
.then(response => {
    console.log("HTTP Status:", response.status);
    console.log("Response Headers:", response.headers);
    return response.text(); // JSON yerine TEXT olarak al
})
.then(text => {
    console.log("Yanıt Metni:", text);
    try {
        const data = JSON.parse(text);  // JSON'a çevir
        if (data.message) {
            showMessage("✅ Başarıyla gönderildi: " + data.message, "success");
        } else {
            throw new Error(data.error || "Bilinmeyen hata!");
        }
    } catch (err) {
        console.error("JSON Parse Hatası:", err);
        throw new Error("Geçersiz yanıt formatı: " + text);
    }
})
.catch(err => {
    console.error("Fetch Hatası:", err);
    showMessage("❌ Hata: " + err.message, "error");
});
