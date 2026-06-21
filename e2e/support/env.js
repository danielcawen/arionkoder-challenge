import dotenv from 'dotenv'

const env = process.env.TEST_ENV ?? 'local'
dotenv.config({ path: `config/.env.${env}` })

export const FRONTEND_URL = process.env.FRONTEND_URL
export const HEADLESS = process.env.HEADLESS !== 'false'
export const VIEWPORT_WIDTH = process.env.VIEWPORT_WIDTH ? parseInt(process.env.VIEWPORT_WIDTH) : 1280
export const VIEWPORT_HEIGHT = process.env.VIEWPORT_HEIGHT ? parseInt(process.env.VIEWPORT_HEIGHT) : 720
