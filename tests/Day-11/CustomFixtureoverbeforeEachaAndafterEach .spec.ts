import {test,expect} from './CustomFixtureoverbeforeEachaAndafterEach'



test('test using custom fixture over before and after each',async({page,loginlogoutfixture})=>{

      await page.getByText('Sauce Labs Backpack').click();
      await page.getByRole("button", { name: 'Add to cart' }).click();
      await page.locator('[data-test="shopping-cart-link"]').click();
      await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
      await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
      await page.getByRole('button', { name: 'Remove' }).click();
      await page.locator('[data-test="shopping-cart-link"]').click();


})
