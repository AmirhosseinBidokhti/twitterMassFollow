const { Builder, By, Capabilities, until } = require("selenium-webdriver");

const AUTH_TOKEN = "8510ea2dada9442453dc5408f7fd690d2d1dbace";
//const FOLLOW_BTN_XPATH =
//"/html/body/div/div/div/div[2]/main/div/div/div/div/div/div[2]/div/div/div[1]/div/div[1]/div/div[3]/div/div/div/span/span";
const FOLLOW_BTN_XPATH =
  "/html/body/div/div/div/div[2]/main/div/div/div/div/div/div[2]/div/div/div[1]/div/div[1]/div/div[2]/div/div";
// const caps = new Capabilities();
// caps.setPageLoadStrategy("eager");

async function example() {
  try {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://twitter.com/");

    await driver.manage().addCookie({
      name: "auth_token",
      value: AUTH_TOKEN,
    });

    await driver.get("https://twitter.com/Codecancare");

    await driver.sleep(3000);

    let btn = driver.findElement(By.xpath(FOLLOW_BTN_XPATH));
    btn.click();

    ///await driver.quit();
  } catch (error) {
    console.error("-----------oops!-----------");
    console.error(error);
  }
}

example();
