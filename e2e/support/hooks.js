import { Before, After, AfterStep, setDefaultTimeout } from '@cucumber/cucumber'
import { firefox } from '@playwright/test'
import { HEADLESS, VIEWPORT_WIDTH, VIEWPORT_HEIGHT } from './env.js'

setDefaultTimeout(20000)

Before({ tags: '@ui' }, async function () {
  this.browser = await firefox.launch({ headless: HEADLESS })
  this.context = await this.browser.newContext({
    viewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT }
  })
  this.page = await this.context.newPage()
})

AfterStep({ tags: '@ui' }, async function ({ result }) {
  if (result?.status === 'FAILED') {
    const screenshot = await this.page?.screenshot()
    if (screenshot) await this.attach(screenshot, { mediaType: 'image/png', fileName: 'screenshot.png' })
  }
})

After({ tags: '@ui' }, async function () {
  await this.page?.close()
  await this.context?.close()
  await this.browser?.close()
})

Before({ tags: '@manual' }, async function () {
  return 'pending'
})
