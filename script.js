function doPost(e) {
  try {
    var params = JSON.parse(e.postData.contents);
    
    // Google Sheets'e veri ekleyelim (Mevcut kodun)
    var sheet = SpreadsheetApp.openById("1kpUfW9o1AE5V-uPr0N5bDHIAxu_I-bAa9TCrpOVXgVU").getSheetByName("Sheet1");
    sheet.appendRow([new Date(), params.prompt, params.completion]);

    return makeCorsResponse({ message: "Success", addedRow: params }, 200);
  } catch (error) {
    return makeCorsResponse({ error: error.message }, 500);
  }
}

// ✅ CORS'u Açan Yanıt Fonksiyonu (Bunu Ekle!)
function makeCorsResponse(responseData, statusCode) {
  return ContentService.createTextOutput(JSON.stringify(responseData))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*") 
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS") 
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

// 🛠 OPTIONS İsteklerine CORS Yanıtı Döndür
function doGet(e) {
  return makeCorsResponse({ message: "Use POST method" }, 200);
}

function doOptions(e) {
  return makeCorsResponse({}, 204);
}
