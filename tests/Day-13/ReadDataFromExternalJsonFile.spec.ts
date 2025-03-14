import { test, expect } from '@playwright/test';
import cdata from '../../testData/testData1.json';
import ddt from '../../testData/DDT-testData.json';




test.beforeEach('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill(cdata.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(cdata.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});



test("adding for recruitment", async ({ page }) => {
    await page.getByRole('link', { name: 'Recruitment' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(cdata.fname);
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill(cdata.lastname);
    await page.locator('form i').first().click();
    await page.getByText('Junior Account Assistant').click();
    await page.getByRole('textbox', { name: 'Type here' }).first().click();
    await page.getByRole('textbox', { name: 'Type here' }).first().fill(cdata.email);
    await page.getByRole('textbox', { name: 'Type here' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Type here' }).nth(1).fill(cdata.telephone);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.locator('#app')).toContainText('Testing Playwright');
})


//2 ways for DDT wither through forEach or forOf

ddt.forEach((value) => {

    test(`Checking with name as ${value.fname} & ${value.lastname}`, async ({ page }) => {
        await page.getByRole('link', { name: 'Recruitment' }).click();
        await page.getByRole('button', { name: ' Add' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).fill(value.fname);
        await page.getByRole('textbox', { name: 'Last Name' }).click();
        await page.getByRole('textbox', { name: 'Last Name' }).fill(value.fname);
        await page.locator('form i').first().click();
        await page.getByText('Junior Account Assistant').click();
        await page.getByRole('textbox', { name: 'Type here' }).first().click();
        await page.getByRole('textbox', { name: 'Type here' }).first().fill(value.email);
        await page.getByRole('textbox', { name: 'Type here' }).nth(1).click();
        await page.getByRole('textbox', { name: 'Type here' }).nth(1).fill(value.telephone);
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.locator('#app')).toContainText('Testing Playwright');
    })
})



for(const data of ddt){

    test(`Checkiing with name as ${data.fname} & ${data.lastname}`, async ({ page }) => {
        await page.getByRole('link', { name: 'Recruitment' }).click();
        await page.getByRole('button', { name: ' Add' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).fill(data.fname);
        await page.getByRole('textbox', { name: 'Last Name' }).click();
        await page.getByRole('textbox', { name: 'Last Name' }).fill(data.fname);
        await page.locator('form i').first().click();
        await page.getByText('Junior Account Assistant').click();
        await page.getByRole('textbox', { name: 'Type here' }).first().click();
        await page.getByRole('textbox', { name: 'Type here' }).first().fill(data.email);
        await page.getByRole('textbox', { name: 'Type here' }).nth(1).click();
        await page.getByRole('textbox', { name: 'Type here' }).nth(1).fill(data.telephone);
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.locator('#app')).toContainText('Testing Playwright');
    })
}