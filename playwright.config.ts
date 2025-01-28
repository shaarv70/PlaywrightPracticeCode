import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',    // so here whichever location is provided tests will be run from that directory only 
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code which means obviously we dont want only single test to be 
  executed by CI.If we directly using true false as values for below key then for true it will throw error whether runnig locally or from CI
  but we are writing values in terms of CI, since we are not using pipeline so  "!process.env.CI" line will give as true and again we have 
  one more ! operator which will make it as false.*/
  forbidOnly: !!process.env.CI,
  /* Retry on CI only, since we are using in way of ternary operator like if we have pipeline then retry the failed test as 2 times if we 
  dont have the ppiepline whch means the test  arerunning locally then do not retry, although we can change the retry coount for locally also
  and also like this "retries: 2"*/
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. 
  So workers are basically used for executing the test, if we want to run the test parallely then we can use the as many workers we want */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: [['html', { open: 'always', outputfolder: './retryfolder' }]],    //here we will be sending the tuple
  reporter: 'html',

  //Timeout for each test in milliseconds. Defaults to 30 seconds.We can configure on our own
  // timeout: 50000,

  //this is assertion timeout, by default is 5000ms, this  also we can configure
  /*  expect: {
     timeout: 7000
 
   },
  */

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    testIdAttribute: "data-test",
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    headless: false  //  by default this is true
  },

  /* Configure projects for major browsers */

  /* we can add projects over here by our own choice, here name can be set anything and whatever project we add over here it will be visible 
   on the testing screen alogwith other browsers or devices. */
  projects: [
    {
      name: 'chromium', //project name
      use: {
        ...devices['Desktop Chrome'],
        //headless:false  -- we can also use this in project specific  
      },   // this use is specefic related to project settigs
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    /*  {
       name: 'webkit',
       use: { ...devices['Desktop Safari'] },
     } */

    /*  {
       name: 'iphone 15pro',
       use: { ...devices['iPhone 15 Pro Max'] },
     } */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});



/* playwright commands:

1) npx playwright test: run all tests
2) npx playwright test KickStart.spec.ts(testname): run specefic test
3) npx playwright test --project=projectname : to run test with specifc project
Ex: npx playwright test --project=iphone 15pro
4) npx playwright test --project=projectname --headed : to run test with specefic project in headed mode  
5) npx playwright test --reporter=html : to generate report at run time if we have not configured in playwright.congif.ts
6) npx playwright show-report : to see report
7) npx playwright show-report customFoldername: if the report is stored in some other folder and not in default folder
Ex: npx playwright show-report retryfolder


*/