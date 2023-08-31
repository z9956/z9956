const puppeteer = require("puppeteer");
const path = require("path");

const websiteUrl =
  "https://www.strava.com/athletes/119323843/activity-summary/15338ddb96e172ac63a9b54d3394dcf3c5ab360e";

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(websiteUrl);

  const screenshotPath = path.join(__dirname, `snapshot.png`);
  await page.screenshot({
    path: screenshotPath,
    clip: { x: 0, y: 0, width: 480, height: 160 },
  });

  await browser.close();

  console.log(`Screenshot saved: ${screenshotPath}`);
})();
