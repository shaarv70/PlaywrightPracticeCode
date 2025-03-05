import { test as baseTest,expect as defaultExpect } from "@playwright/test";

type loginlogoutFixture = {
  loginlogoutfixture: any;
};

export const expect=defaultExpect;
export const test = baseTest.extend<loginlogoutFixture>({
  loginlogoutfixture: async ({page}, use) => {
    const loginlogoutFixture = undefined;

    //Login
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    await use(loginlogoutFixture);

    await page.getByRole("button", { name: 'Open Menu' }).click();
    await page.getByText('Logout').click();
    await page.close();
  },
});
