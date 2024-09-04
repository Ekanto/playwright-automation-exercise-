const { test, expect } = require("@playwright/test");
const { PlayWrightHooks } = require("../Hooks/AllHooks");
const {Locators} = require("../PageObjects/Locators");
const { before } = require("node:test");



test("Verify the Home page visible successfully", async ({ page }) => {
  const url = new PlayWrightHooks(page);
  await url.launchURL();
  await expect(page).toHaveTitle("Automation Exercise");
  await expect(page).toHaveURL("https://automationexercise.com/");
});

test("Verify new user sign up is available", async ({ page }) => {
  const url = new PlayWrightHooks(page);
  await url.launchURL();
  const locators = new Locators(page);
  await locators.verifySignUpVisible();
});

test('Verify sign up', async ({page}) =>{
  const url = new PlayWrightHooks(page);    
  await url.launchURL();
  const locators = new Locators(page);
  await locators.clickSignUP();
  await locators.enterNewUserSignUpName();
  await locators.enterNewUserSignUpEmail();
  await locators.clickNewUserSignUpButton();
  await locators.selectGender();
  await locators.verifyEmailFieldIsDisabled();
  await locators.enterNewUserSignupPassword();
  await locators.selectDays();
  await locators.selectMonths();
  await locators.selectYear();
  await locators.selectNewsLetter();
  await page.waitForTimeout(5000);
  
})
