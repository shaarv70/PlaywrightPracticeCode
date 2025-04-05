import { expect, test } from "@playwright/test";
import { decryptData, encryptData } from "./EncryptionDecryptionUtility.spec";

/*for encryption & decryption we have to first encrypt the credentials then use that encrypted credentials for decrypption then use
those decrypted credentials in the test
We have to do encryption only one time then those encrypted values can be decrypted whenever required
This encryption and decryption can also be done through "Encryption VS code extension also by jjust putting the value over there then ctrl+shift +P
and enter the salt or secret key then Enter"

We can slo create a separate utility for encryption & decryption
Or we can put encrypted values in environment file or json file

*/



test('Successful Login', { tag: "@Regression" }, async ({ page }) => {


    const encryptedUsername: string = encryptData('standard_user');
    console.log(encryptedUsername);

    const encryptedPassword: string = encryptData('secret_sauce');
    console.log(encryptedPassword);


    const decryptUsername = decryptData(encryptedUsername)
    const decryptPassword = decryptData(encryptedPassword);
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(decryptUsername);
    await page.locator('[data-test="password"]').fill(decryptPassword);
    await page.locator('[data-test="login-button"]').waitFor({state:"visible"}).then(()=>{
        page.locator('[data-test="login-button"]').click();

    });
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
})


test('Second way', { tag: "@Smoke" }, async ({ page }) => {

    const decryptUsername = decryptData(process.env.encryptedUsername!);
    const decryptPassword = decryptData(process.env.encryptedPassword!);
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(decryptUsername);
    await page.locator('[data-test="password"]').fill(decryptPassword);
    await page.locator('[data-test="login-button"]').waitFor({state:"visible"}).then(()=>{
        page.locator('[data-test="login-butto"]').click();

    });
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();




})