const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('main text', () => {
  test('heading has text', async ({ page }) => {
    const title = page.locator('h2')
    await expect(title).toHaveText('I love you so much!')
  })
})
