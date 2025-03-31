import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import { OrtoniReportConfig } from 'ortoni-report';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

dotenv.config({
  path: process.env.TEST_ENV ? `./env-files/.env.${process.env.TEST_ENV}` : `./env-files/.env.dev`
});
dotenv.config({

  path: path.resolve("tests/Day-15", ".env.CRED"),
})

const reportConfig: OrtoniReportConfig = {
  open: process.env.CI ? "never" : "never", // default to never
  folderPath: "playwright-report",
  filename: "report.html",
  title: "Playwright Practice",
  showProject: !true,
  projectName: "Playwright",
  testType: "e2e",
  authorName: "Arvind Sharma",
  base64Image: false,
  stdIO: false,
  preferredTheme: "dark",
  meta: {
    project: "Playwright",
    version: "3.0.0",
    description: "Playwright test report",
    testCycle: "1",
    release: "1.0.0",
    platform: "Windows",
  },
};

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  //globalSetup:'./tests/Day-12/global-setup.ts',
  testDir: './tests',    // so here whichever location is provided tests will be run from that directory only 
  /* Run tests in files in parallel */
  fullyParallel: !true,
  /* Fail the build on CI if you accidentally left test.only in the source code which means obviously we dont want only single test to be 
  executed by CI.If we directly using true false as values for below key then for true it will throw error whether runnig locally or from CI
  but we are writing values in terms of CI, since we are not using pipeline so  "!process.env.CI" line will give as true and again we have 
  one more ! operator which will make it as false.*/
  forbidOnly: !!process.env.CI,
  /* Retry on CI only, since we are using in way of ternary operator like if we have pipeline then retry the failed test as 2 times if we 
  dont have the ppiepline whch means the test  arerunning locally then do not retry, although we can change the retry coount for locally also
  and also like this "retries: 2"*/
  retries: process.env.CI ? 1 : 1,
  /* Opt out of parallel tests on CI. 
  So workers are basically used for executing the test, if we want to run the test parallely then we can use the as many workers we want */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: [['html', { open: 'always', outputfolder: './retryfolder' }]],    //here we will be sending the tuple
  //reporter:process.env.CI?"github":'list', // here we can use inbuilt github actions reporter
  //reporter:[['dot'],['line'],['html',{open:'on-failure'}]], // multiple reporter
  reporter: [['line'], ['html', { open: "never" }], ["ortoni-report", reportConfig]],

  //Timeout for each test in milliseconds. Defaults to 30 seconds.We can configure on our own
  timeout: 1000,

  //this is assertion timeout, by default is 5000ms, this  also we can configure
  expect: {
    timeout: 400,
    // toHaveScreenshot:{
    //   maxDiffPixels:20,
    //   maxDiffPixelRatio:0.1   -- these are snapshpts properties
    //}
  },
  //grep:[/UI/,/API/] //: wille execute all those tests which are having UI & API tag
  // grepInvert:/Sanity/,: will skip those tests which are having sanity tag

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    testIdAttribute: "data-test",
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    headless: true,  //  by default this is true,
    //storageState:'./auth/auth.json'   
  },

  /* Configure projects for major browsers */

  /* we can add projects over here by our own choice, here name can be set anything and whatever project we add over here it will be visible 
   on the testing screen alogwith other browsers or devices. */
  projects: [
    // {
    //   name:'setup',
    //  // testMatch:'global.setup.ts'
    //   testMatch:/.*\.setup\.ts/ //-- regular expression

    // },
    {
      name: 'chromium', //project name
      // dependencies:['setup'], //--first it will execute the project having name as setup
      use: {
        ...devices['Desktop Chrome'],
        //  storageState:'./auth/auth.json' //-- this is another way for saving authentication state with project specfic
        //headless:false  -- we can also use this in project specific  
      }, // this use is specefic related to project settigs
    },

    {
      name: 'firefox',
      // dependencies:['setup'],
      use: {
        ...devices['Desktop Firefox'],
        //  storageState:'./auth/auth.json' },

      },
    }

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
8) npx playwright test --debug: will start debug mode for all tests in playwright inspector
9) npx playwright test KickStart.spec.ts:4(line number from where debug starts) --debug :will start debug mode for all tests in playwright inspector frok mentioned line
10) npx playwright test --debug --project=chromium : will start debug mode for all tests in playwright inspector in chromium project
11)npx playwright codegen :to record a test 
12) npx playwright show-trace path to the zip
13) npx playwright test --trace=on : if the trace is not on in config.ts then we can mention in the CLI
13)npx playwright test --ui :to run the test in  ui mode  
note : watch mode in ui screen is for whenever we are doing changes in source code for whichever test is using
that tests under watch then it will automatically run those tests 
14) npx playwright codegen --save-storage=filename.json : this command will open the codegen screen and then we can 
perform login and that login authentication state will save in this json file which we have provided in root directory
Now if we want to record the test again we dont have to login again in the application and just use tis command 
npx playwright codegen --load-storage=auth.json linkof the application
15)Second way of genegerating this authentication file is to use globalsetup file  
16) npx playwright test --grep=@tag : to run test having particular tag
17) npx playwright test --grep-invert=@tag: to skip the test having certain tag
Run test in either tag (Logical OR operator)
Powershell:
18)npx playwright test --grep --% "@tag1|@tag2"
Batch command:
19)npx playwright test --grep "@tag1|@tag2"
Bash:
20)npx playwright test --grep "@tag1|@tag2|@tag3"
Run test containing both tags (Logical and AND)
npx playwright test --grip "(?=.*@UI)(?=.*@Smoke)"
21) npx playwright test --update-snapshots : to update all the snapshots(comparing waale) with the latest snapshots 
22) Environment variable commands:either through dotenv package in config.ts or cross_env in package.json
For batch: set<variable_name>=<value> npx playwright test
Example: set TEST_ENV=dev
For powershell:$env:<variable_name>=<value> npx playwright test
Example: $env:TEST_ENV="dev" then next command is npx playwright test 
                        or 
              $env:Test_ENV="dev";npx playwright test          
For Bash Terminal:<variable_name>=value npx playwright test
Example: TEST_ENV=dev npx playwright test







*/