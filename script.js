fetch("https://script.google.com/macros/s/AKfycbxr0hmZbhGVJm7wTICjx8hWGj2aQy16r6FAsaodAkUdWF35IXPbxWIOemFHxf0Y-k_g/exec", {
    method: "POST",
    mode: "cors",
    credentials: "omit", // Google giriş zorunluluğunu kaldır
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
