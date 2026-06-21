import { Before, After, AfterStep, setDefaultTimeout } from '@cucumber/cucumber'
import { firefox } from '@playwright/test'
import fs from 'fs'
import { HEADLESS, VIEWPORT_WIDTH, VIEWPORT_HEIGHT } from './env.js'

setDefaultTimeout(20000)

Before({ tags: '@ui' }, async function () {
  this.browser = await firefox.launch({ headless: HEADLESS })
  this.context = await this.browser.newContext({
    recordVideo: { dir: 'reports/videos/' },
    viewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT }
  })
  this.page = await this.context.newPage()
})

AfterStep({ tags: '@ui' }, async function ({ result }) {
  if (result?.status === 'FAILED') {
    const screenshot = await this.page?.screenshot()
    if (screenshot) await this.attach(screenshot, { mediaType: 'image/png', fileName: 'screenshot.png' })

    const video = this.page?.video()
    await this.page?.close()
    await this.context?.close()
    this._uiTornDown = true

    if (video) {
      const videoPath = await video.path()
      if (videoPath) {
        await this.attach(fs.readFileSync(videoPath), { mediaType: 'video/webm', fileName: 'video.webm' })
        fs.unlinkSync(videoPath)
      }
    }
  }
})

After({ tags: '@ui' }, async function () {
  if (this._uiTornDown) {
    await this.browser?.close()
    return
  }

  const video = this.page?.video()
  await this.page?.close()
  await this.context?.close()

  if (video) {
    const videoPath = await video.path()
    if (videoPath) fs.unlinkSync(videoPath)
  }

  await this.browser?.close()
})

Before({ tags: '@manual' }, async function () {
  return 'pending'
})
