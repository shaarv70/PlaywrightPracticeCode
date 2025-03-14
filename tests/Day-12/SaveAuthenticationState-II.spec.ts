import { test, expect } from '@playwright/test';



test.beforeEach('test', async ({ page }) => {
    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    // await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  });

  test("Verify apply leave card navigation on dashboard page",async({page})=>{
  
  await page.getByRole('link', { name: 'Time' }).click();
  await expect(page.getByRole('heading', { name: '/ Timesheets' })).toBeVisible();
})


