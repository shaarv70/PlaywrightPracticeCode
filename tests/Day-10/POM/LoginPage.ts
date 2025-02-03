import { Locator, Page } from '@playwright/test';
import { HomePage } from './HomePage';



export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginBtn = page.locator("id=login-button");
    }



    async openApplication() {

        await this.page.goto("https://www.saucedemo.com/");
    }

    async loginApplication(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
        return new HomePage(this.page);
    }




}
