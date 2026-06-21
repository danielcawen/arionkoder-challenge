import { expect } from '@playwright/test'

const emailInputLocator = '[data-testid="email-input"]'
const passwordInputLocator = '[data-testid="password-input"]'
const submitButtonLocator = '[data-testid="submit-button"]'
const errorMessageLocator = '[data-testid="error-message"]'
const dashboardHeadingLocator = '[data-testid="dashboard-heading"]'
const logoutButtonLocator = '[data-testid="logout-button"]'

export async function login(page, email, password) {
  await page.locator(emailInputLocator).waitFor()
  await page.locator(emailInputLocator).fill(email)
  await page.locator(passwordInputLocator).fill(password)
  await page.locator(submitButtonLocator).click()
}

export async function verifyErrorMessage(page, text) {
  const el = page.locator(errorMessageLocator)
  await el.waitFor()
  await expect(el).toContainText(text)
}

export async function verifyRedirectedToDashboard(page) {
  await expect(page.locator(dashboardHeadingLocator)).toBeVisible({ timeout: 5000 })
}

export async function clickLogout(page) {
  await page.locator(logoutButtonLocator).click()
}
