const {test, expect} =require('@playwright/test')

test("Login validity check", async function ({page}) {
      // Navigate to the login page and extend timeout to 60 seconds
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {timeout: 60000 })
     
       // Ensure the username field is available before interacting with it
    await page.waitForSelector('input[name="username"]', { timeout: 60000 });
    await page.fill('input[name="username"]', 'Admin'); // Use a specific selector
     // Ensure the password field is available before interacting with it
    await page.waitForSelector('input[name="password"]', { timeout: 60000 });
    await page.fill('input[name="password"]', 'admin123');

    // Click the login button
    await page.locator('button[type="submit"]').click();

    // Optional: Add an assertion to ensure login was successful
    // Example: Wait for a dashboard element or a URL change after login
    await expect(page).toHaveURL(/.*dashboard.*/); // Ensure the URL changes to a dashboard page
})