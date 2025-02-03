import { expect, test } from '@playwright/test'


//check() - to check the radio button
//toBeChecked() : to check whther the radio button is checked or not

test('Handling Check boxes', async ({ page }) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.getByRole('checkbox').first().isChecked().then(async (value) => {

        if (!value) {

            await page.getByRole('checkbox').first().check();
        }

        expect(page.getByRole('checkbox').first()).toBeChecked();
        await page.getByRole('checkbox').first().uncheck();
        await expect(page.getByRole('checkbox').first()).not.toBeChecked();
        await page.getByRole('checkbox').nth(1).check();

    })


})