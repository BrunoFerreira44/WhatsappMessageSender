const puppeteer = require("puppeteer");
const USER_CONFIG = require("./config/properties");
const HTML_ELEMENTS = require("./config/html-elements");

async function MessageSender(url) {
   const browser = await puppeteer.launch({ headless: false });
   const page = await browser.newPage();
   await page.goto(url);

   for (const contact of USER_CONFIG.contactName) {
      await page.waitForSelector("._2_1wd");
      const searchContact = await page.$("._2_1wd");
      await searchContact.click();
      await searchContact.type(USER_CONFIG.contactName[HTML_ELEMENTS.counter]);

      await page.waitForSelector(
         `span[title='${USER_CONFIG.contactName[HTML_ELEMENTS.counter]}']`
      );
      const contactConversation = await page.$(
         `span[title='${USER_CONFIG.contactName[HTML_ELEMENTS.counter]}']`
      );
      await contactConversation.click();

      const input = await page.$(HTML_ELEMENTS.inputMessage);

      for (let i = 0; i < USER_CONFIG.amountMessages; i++) {
         await input.type(USER_CONFIG.message);
         await page.keyboard.press("Enter");
      }

      HTML_ELEMENTS.counter += 1;
   }

   await browser.close();
   return "Mensagens enviadas com sucesso! Verifique seu WhatsApp!!!";
}

MessageSender(USER_CONFIG.url)
   .then(console.log)
   .catch((err) => {
      throw new Error(err);
   });
