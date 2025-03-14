import {test,expect} from '@playwright/test'



test.use({storageState:{cookies:[],origins:[]}}); // -- with this line we can avoid authentication state for
//complete test file including all tests 

test.beforeEach('test', async ({ page }) => {
    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    // await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  });


  
  test("Verify apply leave card navigation on dashboard page",async({page,context})=>{
    //await context.clearCookies(); -- to avoid authentication state for a particular test
    await expect(page.locator('#app')).toContainText('Quick Launch');
    await expect(page.getByText('Assign Leave')).toBeVisible();
    await expect(page.locator('#app')).toContainText('No Leave Types with Leave Balance');
    await page.getByRole('button', { name: 'Apply Leave' }).click();
})

test("adding for recruitment",async({page})=>{
    await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Adruion');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('test');
  await page.locator('form i').first().click();
  await page.getByText('Junior Account Assistant').click();
  await page.getByRole('textbox', { name: 'Type here' }).first().click();
  await page.getByRole('textbox', { name: 'Type here' }).first().fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Type here' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Type here' }).nth(1).fill('3425255');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('#app')).toContainText('Adruion test');
})