import { expect, test } from '../../testData/testDataFixture'



test.beforeEach('test', async ({ loginData, page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill(loginData.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(loginData.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});


test("adding for recruitment", async ({ page, testData }) => {
    await page.getByRole('link', { name: 'Recruitment' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(testData.fname);
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill(testData.lastname);
    await page.locator('form i').first().click();
    await page.getByText('Junior Account Assistant').click();
    await page.getByRole('textbox', { name: 'Type here' }).first().click();
    await page.getByRole('textbox', { name: 'Type here' }).first().fill(testData.email);
    await page.getByRole('textbox', { name: 'Type here' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Type here' }).nth(1).fill(testData.telephone);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.locator('#app')).toContainText('Testing Playwright');
    await page.close();
})