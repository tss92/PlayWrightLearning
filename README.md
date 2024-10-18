Playwright Project
This project uses Playwright for browser automation and testing.

1. Setup
Install Playwright:
Make sure you have Node.js installed. Then, in your project folder, 
run:
npm init -y
npm install playwright

2. Install Browsers
Install the required browsers:
npx playwright install

3. Writing a Test
Create a simple test file (e.g., example.spec.js):
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

4. Running the Test
   npx playwright test

   or Running in Headed Mode
   npx playwright test --headed


   


