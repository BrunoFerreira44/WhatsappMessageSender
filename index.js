const puppeteer = require("puppeteer");
const USER_CONFIG = require("./config/properties");

// É importante lembrar que, se o contato não estiver entre os primeiros quando a página for carregada,
// o código provavelmente irá estourar. Isso se deve ao fato de o WhastApp não carregar toda a lista de conversas
// uma vez que conectado.
// Por esse motivo, a linha 18 nunca receberá uma resposta

async function MessageSender(url) {
   //Iniciando o puppeteer e abrindo o Chromium
   const browser = await puppeteer.launch({ headless: false });
   const page = await browser.newPage();

   //Abrindo o Whatsapp (necessita de validação do QRCode)
   await page.goto(url);

   //Selecionando o contato desejado
   await page.waitForSelector(`span[title='${USER_CONFIG.contactName}']`);
   const target = await page.$(`span[title='${USER_CONFIG.contactName}']`);
   await target.click();

   //Selecionando o campo de digitação da conversa
   const input = await page.$(
      "#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text"
   );

   //Loop para enviar a mensagem para o contato
   for (let i = 0; i < USER_CONFIG.amountMessages; i++) {
      //for (let x = 0; x < 10; x++) {
      await input.type(USER_CONFIG.message);
      //}
      await page.keyboard.press("Enter");
   }
}

MessageSender(USER_CONFIG.url);
