import { test, expect } from '@playwright/test';



test("Handle JS alert", async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', (dialog) => {                 //code for handlig the alert

        expect(dialog.type()).toEqual("alert");
        expect(dialog.message()).toEqual("I am a JS Alert");
        dialog.accept();
    })


    await page.getByRole('button', { name: "Click for JS Alert" }).click();
    await expect(page.locator('#result')).toHaveText("You successfully clicked an alert");
})


test('handle confirm dialog', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', (dialog) => {
        expect(dialog.type()).toEqual("confirm");
        expect(dialog.message()).toEqual("I am a JS Confirm");
        dialog.accept();
        //dialog.dismiss(); -- to click in cancel
    })
    await page.getByRole('button', { name: "Click for JS Confirm" }).click();
    await expect(page.locator('#result')).toHaveText("You clicked: Ok");


})


test('handle prompt', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', (dialog) => {
        expect(dialog.type()).toEqual("prompt");
        expect(dialog.message()).toEqual("I am a JS prompt");
        expect(dialog.defaultValue()).toEqual(""); // --to check the default value of input box
        dialog.accept("Hello this is from prompt");
        //dialog.dismiss(); -- to click in cancel
    })
    await page.getByRole('button', { name: "Click for JS Prompt" }).click();
    await expect(page.locator('#result')).toHaveText("You entered: Hello this is from prompt");


})

