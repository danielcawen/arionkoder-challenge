import { expect } from '@playwright/test'

const getStartedButtonLocator = '[data-testid="get-started-button"]'
const headingLocator = '[data-testid="landing-heading"]'

export async function verifyOnLandingPage(page) {
  await expect(page.locator(headingLocator)).toBeVisible()
}

export async function verifyGetStartedButtonVisible(page) {
  await page.locator(getStartedButtonLocator).waitFor()
}

export async function clickGetStarted(page) {
  await page.locator(getStartedButtonLocator).click()
}
