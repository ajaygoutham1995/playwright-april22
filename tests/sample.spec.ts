// import { test, expect } from '@playwright/test';
import { test, expect } from '../src/Base/BaseTest';



export default test.describe.serial('Sample Test', () => {
  test('has title ?', async ({ page, context, dashBoard }) => {
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
    //throw new Error('failing this')

  });

  test('get started link ?', async ({ page, dashBoard }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
})

test('get started link ?', async ({ page, dashBoard }) => {
  console.log("Sample test to cehck describe block");

});


