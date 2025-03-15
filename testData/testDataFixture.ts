import { test as baseTest,expect as defaultExpect } from '@playwright/test';



type myFixture = {

    loginData: any,
    testData: any
}

export  const expect=defaultExpect;
export const test = baseTest.extend<myFixture>({

    loginData: {
        "username": "Admin",
        "password": "admin123"

    },
    testData: {
        "fname": "Testing",
        "lastname": "Playwright",
        "email": "test@gmail.com",
        "telephone": "3425255"
    }

})


