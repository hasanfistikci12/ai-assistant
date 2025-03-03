fetch("https://script.google.com/macros/s/AKfycbxxOfaGymZAjql6dNN6pxMvnx0zVvCkadZSABs5X1rj8qrFE6IIv_xIxI-TcFMdvj3f/exec", {
    method: "POST",
    mode: "cors",
    credentials: "omit", // Tarayıcıdan Google'a giriş yapılmasını önler
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
