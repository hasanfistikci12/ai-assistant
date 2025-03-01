  fetch("https://script.google.com/macros/s/AKfycbxAWXFmZxjM352ZCEHL7DwQmQplbI9q7l_yUQDXH6JxeyJwN8zTtntra_draBIsf3zW/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: "GH-Pages test prompt",
      completion: "GH-Pages test completion"
    })
  })
  .then(response => response.text())
  .then(data => {
    console.log("Yanıt:", data); // Google Sheets'e başarılı olup olmadığını görmek için
    alert("Veri gönderildi!"); // Kullanıcıya bildirim verelim
  })
  .catch(err => {
    console.error("Hata:", err);
    alert("Veri gönderilirken hata oluştu!");
  });
});
