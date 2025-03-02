import { expect } from '@playwright/test';
import {test} from  './pomFixture'



test("Test with fixture",async({loginPage,homePage,cartVerification})=>{

 
    await loginPage.openApplication();
    await loginPage.loginApplication("standard_user", "secret_sauce");
    await expect(homePage.homePageTitle).toHaveText("Products");
    await homePage.addingProducttoCart();
    await homePage.assertRemoveButton();
    await homePage.assertaddToCartButton();
    await homePage.clickOnshoppingCartButton();
    await cartVerification.assertItem();

})