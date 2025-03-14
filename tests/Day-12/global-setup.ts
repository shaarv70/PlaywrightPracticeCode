import { chromium,Page,expect } from "@playwright/test";

//by this way we can bypass login but through this way  we we wont be able to see the execution of this script also in our report

async function globalSetup(){
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page:Page=await context.newPage();
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.context().storageState({path:'./auth/SecondWayAuth.json'})
}

export default globalSetup