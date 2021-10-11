const { Builder, By, Capabilities, until } = require("selenium-webdriver");

const AUTH_TOKEN = "8510ea2dada9442453dc5408f7fd690d2d1dbace";
const FOLLOW_BTN_XPATH =
  "/html/body/div/div/div/div[2]/main/div/div/div/div/div/div[2]/div/div/div[1]/div/div[1]/div/div[3]/div/div/div/span/span";

const caps = new Capabilities();
caps.setPageLoadStrategy("eager");

async function example() {
  let driver = await new Builder()
    .withCapabilities(caps)
    .forBrowser("chrome")
    .build();

  try {
    await driver.get("https://twitter.com/");
    await driver.manage().addCookie({
      name: "auth_token",
      value: AUTH_TOKEN,
    });

    await driver.get("https://twitter.com/Codecancare");

    await sleep(5000);

    let followBtn = await driver
      .wait(until.elementLocated(By.xpath(FOLLOW_BTN_XPATH)), 6000)
      .click();
    //await driver.manage().setTimeouts({ implicit: 3000 });
    //let followBtn = await driver.findElement(By.xpath(FOLLOW_BTN_XPATH));
    // let foo = await driver.wait(
    //   until.elementLocated(By.xpath(FOLLOW_BTN_XPATH)),
    //   30000,
    //   "Timed out after 30 seconds",
    //   5000
    // );

    // await foo.click();

    //await followBtn.click();
  } catch (error) {
    console.log(error);
    //example();
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

example();
