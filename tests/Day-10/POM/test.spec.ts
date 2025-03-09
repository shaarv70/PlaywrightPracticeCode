import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { CartVerification } from './CartVerification';



test('Verification of cart', async ({ page }) => {

    const login = new LoginPage(page);
    await login.openApplication();
    await login.loginApplication("standard_use", "secret_sauce");
    const homePage = new HomePage(page);
    await expect(homePage.homePageTitle).toHaveText("Products");
    await homePage.addingProducttoCart();
    await homePage.assertRemoveButton();
    await homePage.assertaddToCartButton();
    await homePage.clickOnshoppingCartButton();
    const cartVerification = new CartVerification(page);
    await cartVerification.assertItem();



})