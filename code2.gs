function checkWebhook() {
  const response = UrlFetchApp.fetch(
    'https://api.telegram.org/bot' + '8215678024:AAHMtIp52vW_L0iYLbb21rBSOE1BTnp7CwU' + '/getWebhookInfo'
  );
  Logger.log(response.getContentText());
}
function setTelegramWebhook() {
  const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyFWxon7mxQofokiNUydy5r3ydq0LTBB0Dpebsx6FtC7NLtkiA9B-RmyghTfIm-UcouyQ/exec'; // ← URL الجديد
  const response = UrlFetchApp.fetch(
    'https://api.telegram.org/bot' + '8215678024:AAHMtIp52vW_L0iYLbb21rBSOE1BTnp7CwU' + '/setWebhook',
    {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ url: WEBHOOK_URL }),
      muteHttpExceptions: true
    }
  );
  Logger.log(response.getContentText());
}
