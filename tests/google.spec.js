const {test, expect} =require('@playwright/test')

test("Verify Google Title", async ({page})=>{
    
    await page.goto("http://google.com")
    
    const url =await page.url()
    
    console.log("The url is "+url)

    const title = await page.title()

    console.log("The title is "+title)

    await expect(page).toHaveTitle("Google")
})