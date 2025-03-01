fetch("https://script.google.com/macros/s/AKfycbxviwMEIKPrjTDuFMv34sInN96FL-YHAPNr-TJCOsNHBOzjgqDG_zCnTlDupdWKRYKD/exec", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    prompt: "Test Prompt from Console",
    completion: "Test Completion from Console"
  })
})
.then(response => response.text())
.then(data => console.log("Yanıt:", data))
.catch(err => console.error("Hata:", err));
