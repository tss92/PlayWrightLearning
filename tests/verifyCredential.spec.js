const { test, expect } = require("@playwright/test")

test("Verify error message", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {timeout: 60000 })
    
    //await page.getByPlaceholder("Username").type("Admin")
    //.type is not being used anymore. 

    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("User")
    //we need to use locator as we are using xpath
    await page.locator("//button[normalize-space()='Login']").click()

    //to find the xpath for Invalid credentials error  //p[contains(@class,'alert-content-text')]
    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()
    console.log("Error message is "+errorMessage)

    // to run it - npx playwright test ./tests/verifyCredential.spec.js --headed

    //partial validation of the error message using expect
    //expect(errorMessage.includes("Invalid")).toBeTruthy()

    // if you want to fail it
    //expect(errorMessage.includes("Error")).toBeTruthy()

    //full validation of the error message using expect
    expect(errorMessage==="Invalid credentials").toBeTruthy()
})
