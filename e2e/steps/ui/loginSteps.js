import { Given, When, Then } from '@cucumber/cucumber'
import { login, verifyErrorMessage, verifyRedirectedToDashboard, clickLogout } from '../../pages/loginPage.js'
import { FRONTEND_URL } from '../../support/env.js'

Given('I am on the login page', async function () {
  await this.page.goto(`${FRONTEND_URL}/login`)
})

When('I log in with email {string} and password {string}', async function (email, password) {
  await login(this.page, email, password)
})

Then('I should be redirected to the dashboard', async function () {
  await verifyRedirectedToDashboard(this.page)
})

Then('I should see the error message {string}', async function (text) {
  await verifyErrorMessage(this.page, text)
})

When('I click the logout button', async function () {
  await clickLogout(this.page)
})

Then('I should be on the landing page', async function () {
  await this.page.waitForURL(FRONTEND_URL, { timeout: 5000 })
})
