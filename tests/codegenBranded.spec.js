import { test, expect } from '@playwright/test';

//npx playwright codegen https://opensource-demo.orangehrmlive.com/web/index.php/auth/login -o ./tests/codegenBranded.spec.js --channel=chrome
test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.waitForTimeout(2000)
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.waitForTimeout(2000)
  await page.getByPlaceholder('Password').fill('admin123');
  await page.waitForTimeout(2000)
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('span').filter({ hasText: 'manda user' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});