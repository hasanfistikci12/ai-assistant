fetch("https://script.google.com/macros/s/AKfycbwlcFcdaAtmXfhOr6VdB5IeWAtUwDm_hmFlzwh036Zzjc6zm49S_kszIthiIvADeylX/exec", {
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
