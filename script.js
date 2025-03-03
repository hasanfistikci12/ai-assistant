fetch("https://script.google.com/macros/s/AKfycbzHVoC1bK4VoBaGxHTJz6qr7Z1WxOw59Ky9Dr7tuo3ULqPwrfTjUjvM4pQKN7OUOa6u/exec", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        prompt: "Kullanıcı Prompt'u Burada",
        completion: "Bu Prompt'un Cevabı Burada"
    })
})
.then(response => response.json())
.then(data => {
    console.log("Google Sheets'e Eklendi:", data);
})
.catch(err => {
    console.error("Hata:", err);
});
