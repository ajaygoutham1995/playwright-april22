// import { test, expect } from '@playwright/test';
import { test, expect } from '../src/Base/BaseTest';
import { urls } from '../src/Base/Enums';
import { status } from '../src/Base/Enums';


export default test.describe.serial('Example Test', () => {
  test('has title', { tag: '@smoke' }, async ({ page, context, dashBoard }) => {
    await page.goto('https://playwright.dev/');
    let primaryLocator = await page.locator(`//a[text()='Get started']`);
    let secondaryLocator = await page.locator(`//a[text()='Get started']`);
    let fallBackLocator = await primaryLocator.or(secondaryLocator)
    await fallBackLocator.click();
    await page.waitForTimeout(5000);
    expect(await page.locator(`//h1[text()='Installation']`)).toBeVisible();
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle(/Playwright/);
    console.log("Passed");
    dashBoard.logMessage();
    console.log(urls.dashboard)
    console.log(status.success)
    expect(status.success).toBe(200);
  });
  test('get started link', async ({ page, dashBoard }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
  // test('basic auth validation', async ({ page }) => {
  //   await page.goto('https://the-internet.herokuapp.com/basic_auth');

  //   await page.waitForLoadState('domcontentloaded')
  //   await expect(await page.locator('div.example>h3')).toHaveText('Basic Auth');
  // });
})