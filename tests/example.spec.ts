// import { test, expect } from '@playwright/test';
import { test, expect } from '../Base/BaseTest';


test('has title', async ({ page, dashBoard,sharedData }) => {
  await page.goto('https://playwright.dev/');

  let primaryLocator = await page.locator(`//a[text()='Get started']`);
  let secondaryLocator = await page.locator(`//a[text()='Get started']`);
  let fallBackLocator = await primaryLocator.or(secondaryLocator)
  await fallBackLocator.click();
  await page.waitForTimeout(5000);
  expect(await page.locator(`//h1[text()='Installation']`)).toBeVisible();
  await page.waitForTimeout(5000);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log("Passed");
  dashBoard.logMessage();
  
});

test('get started link', async ({ page,dashBoard }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


// test('basic auth validation', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/basic_auth');

//   await page.waitForLoadState('domcontentloaded')
//   await expect(await page.locator('div.example>h3')).toHaveText('Basic Auth');
// });
