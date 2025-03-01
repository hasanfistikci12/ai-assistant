document.getElementById('testBtn').addEventListener('click', async () => {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxAWXFmZxjM352ZCEHL7DwQmQplbI9q7l_yUQDXH6JxeyJwN8zTtntra_draBIsf3zW/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: "GH-Pages test prompt",
        completion: "GH-Pages test completion"
      })
    });

    const result = await response.json(); // Yanıtı JSON olarak al
    console.log("Yanıt:", result);

    if (response.ok) {
      alert("Başarıyla eklendi! 🚀");
    } else {
      alert("Hata: " + result.error);
    }
  } catch (err) {
    console.error("Fetch Hatası:", err);
  }
});
