import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { verifyGetStartedButtonVisible, clickGetStarted } from '../../pages/landingPage.js'
import { FRONTEND_URL } from '../../support/env.js'

Given('I navigate to the landing page', async function () {
  await this.page.goto(FRONTEND_URL)
})

Then('I should see the {string} button', async function (label) {
  await verifyGetStartedButtonVisible(this.page)
})

When('I click {string}', async function (label) {
  await clickGetStarted(this.page)
})

Then('I should be on the login page', async function () {
  await this.page.waitForURL(`${FRONTEND_URL}/login`, { timeout: 5000 })
  await expect(this.page.locator('[data-testid="submit-button"]')).toBeVisible()
})
