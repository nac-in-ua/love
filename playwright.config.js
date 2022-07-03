// @ts-check
const { devices } = require('@playwright/test')

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
 const path = require('path')
 require('dotenv').config({
   path: path.resolve(__dirname, './env', '.env'),
 })

 /**
  * @see https://playwright.dev/docs/test-configuration
  * @type {import('@playwright/test').PlaywrightTestConfig}
  */
 const config = {
   testDir: './e2e',
   testIgnore: ['**/test-results/**'],
   /* Maximum time one test can run for. */
   timeout: 30 * 1000,
   expect: {
     /**
      * Maximum time expect() should wait for the condition to be met.
      * For example in `await expect(locator).toHaveText();`
      */
     timeout: 10000,
   },
   /* Fail the build on CI if you accidentally left test.only in the source code. */
   forbidOnly: !!process.env.CI,
   /* Retry on CI only */
   retries: process.env.CI ? 2 : 0,
   /* Opt out of parallel tests on CI. */
   workers: process.env.CI ? 1 : undefined,
   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
   reporter: process.env.CI ? [['github'], ['html']] : [['list'], ['html']],
   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
   use: {
     /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
     actionTimeout: 0,
     /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: process.env.SITE_URL,

     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
     trace: process.env.CI ? 'on-first-retry' : 'on',
   },

   /* Configure projects for major browsers */
   projects: [
     {
       name: 'chromium',
       use: {
         ...devices['Desktop Chrome'],
       },
     },

     {
       name: 'firefox',
       use: {
         ...devices['Desktop Firefox'],
       },
     },

     {
       name: 'webkit',
       use: {
         ...devices['Desktop Safari'],
       },
     },
   ],

   /* Folder for test artifacts such as screenshots, videos, traces, etc. */
   // outputDir: 'test-results/',

   /* Run your local dev server before starting the tests */
   webServer: {
     command: 'npm run dev --mode=production',
     port: Number(process.env.PORT),
     timeout: 120 * 1000,
     reuseExistingServer: !process.env.CI,
   },
 }

module.exports = config
