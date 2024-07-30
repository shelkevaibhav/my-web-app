// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://my-web-app-peach.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Create Next App');
});
test('check header text', async ({ page }) => {
  await page.goto('https://my-web-app-peach.vercel.app/');

  // Expect a title "to contain" a substring.
  const eleRef = await page.getByTestId("header");
  await expect(eleRef).toHaveText('My React page');
});
test('check Footer text', async ({ page }) => {
  await page.goto('https://my-web-app-peach.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText(/rights belongs to me/i)).toBeVisible()
});

