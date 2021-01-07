const { BrowserProvider } = require("simple-web-ui-tester");
const openServer = require("./server");

main();

async function main() {
  try {
    const browserProvider = new BrowserProvider();
    const browser = await browserProvider.lauchBrowser();
    const port = process.env.PORT || 8765;
    const urlServer = await openServer(port);

    const adminPage = (await browser.pages())[0] || (await browser.newPage());

    if (process.env.NODE_ENV == "production") {
      adminPage.goto(urlServer);
    }
  } catch (err) {
    console.error(err);
  }
}
