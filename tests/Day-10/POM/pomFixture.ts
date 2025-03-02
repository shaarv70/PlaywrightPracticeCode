import {test as basetest} from '@playwright/test';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { CartVerification } from './CartVerification';

type UIPages={

    loginPage:LoginPage,
    homePage:HomePage,
    cartVerification:CartVerification


}

export const test=basetest.extend<UIPages>({

    loginPage:async({page},use)=>{

        const loginPage= new LoginPage(page);
       await use(loginPage);

    },
    homePage:async({page},use)=>{

        await use(new HomePage(page));
    },
    cartVerification:async({page},use)=>{
        await use(new CartVerification(page));
    }






})