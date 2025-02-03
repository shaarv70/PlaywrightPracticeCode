import { test } from '@playwright/test';


test("Handle multiselect dropdown", async ({ page }) => {

    await page.goto('https://demoqa.com/select-menu');

    //here we can give visible text or value attribute value or label value or mixed
    await page.locator('#cars').selectOption(['Volvo', 'saab']);
})