const { Builder, By, Capabilities, until } = require("selenium-webdriver");

const AUTH_TOKEN = "EXTRACT_THIS_FROM_YOUR_BROWSER_COOKIE_ONCE_YOU_LOGGED_IN";

const FOLLOW_BTN_XPATH =
  "/html/body/div/div/div/div[2]/main/div/div/div/div/div/div[2]/div/div/div[1]/div/div[1]/div/div[2]/div/div";

// const caps = new Capabilities();
// caps.setPageLoadStrategy("eager");

async function follow() {
  try {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://twitter.com/");

    await driver.manage().addCookie({
      name: "auth_token",
      value: AUTH_TOKEN,
    });

    // TODO: read a file full of accounts to follow
    await driver.get("https://twitter.com/Codecancare");

    await driver.sleep(3000);

    let followBtn = driver.findElement(By.xpath(FOLLOW_BTN_XPATH));
    followBtn.click();

    ///await driver.quit();
  } catch (error) {
    console.error("-----------oops!-----------");
    console.error(error);
  }
}

//follow();
