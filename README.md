# arionkoder-challenge

A small React web app with a landing page and login form, plus a Playwright + Cucumber UI test suite.

---

## Project Structure

```
arionkoder-challenge/
├── app/                        # React (Vite) frontend
│   └── src/pages/
│       ├── LandingPage.jsx     # Hero with "Get Started" button
│       ├── LoginPage.jsx       # Login form (email + password)
│       └── DashboardPage.jsx   # Post-login screen
├── e2e/
│   ├── features/ui/            # Gherkin scenarios (@ui tag)
│   ├── steps/ui/               # Step definitions
│   ├── pages/                  # Page modules (locators + actions)
│   └── support/
│       ├── env.js              # Loads config/.env.{TEST_ENV}
│       ├── world.js            # CustomWorld shared state
│       └── hooks.js            # Browser lifecycle (Firefox, headless)
├── config/
│   └── .env.example            # Environment variable template
├── cucumber.json               # Test profiles (default, ui)
└── package.json                # E2E dependencies
```

---

## Prerequisites

- Node.js 18+
- Firefox browser installed by Playwright (see setup below)

---

## Setup

**Install E2E dependencies and Firefox:**

```bash
npm install
npx playwright install firefox
```

**Install app dependencies:**

```bash
cd app && npm install
```

---

## Running the App

```bash
cd app && npm run dev
# App starts at http://localhost:5173
```

Valid login credentials: `user@example.com` / `password123`

---

## Running Tests

The app must be running before executing tests.

```bash
# All features
npx cucumber-js

# UI only (launches headless Firefox)
npx cucumber-js --profile ui

# Single feature file
npx cucumber-js e2e/features/ui/auth/login.feature

# Scenarios matching a name
npx cucumber-js --name "Successful login"
```

Reports are written to `reports/` as HTML and JSON after each run.

---

## Manual Test Report

Scenarios tagged `@manual` are excluded from automated runs. To generate a report listing all of them:

```bash
npm run test:manual
# → reports/manual-report.html
```

The report shows every `@manual` scenario as **Pending** — a checklist for a QA tester to work through manually.

**To add a manual scenario**, tag it with both `@ui` and `@manual`, then add its steps to `e2e/steps/ui/manualSteps.js` returning `'pending'`:

```gherkin
@manual
Scenario: Visual layout looks correct
  Then the page should match the design spec
```

```js
// e2e/steps/ui/manualSteps.js
Then('the page should match the design spec', async function () {
  return 'pending'
})
```

---

## Environment Variables

Loaded from `config/.env.local` by default. Copy from the example to get started:

```bash
cp config/.env.example config/.env.local
```

| Variable          | Default                   | Description                              |
| ----------------- | ------------------------- | ---------------------------------------- |
| `FRONTEND_URL`    | `http://localhost:5173`   | Base URL of the running app              |
| `HEADLESS`        | `true`                    | Set to `false` to show the browser window |
| `VIEWPORT_WIDTH`  | `1280`                    | Browser viewport width in pixels         |
| `VIEWPORT_HEIGHT` | `720`                     | Browser viewport height in pixels        |

Variables can be set in `config/.env.local` or passed inline:

```bash
HEADLESS=false npx cucumber-js --profile ui
VIEWPORT_WIDTH=1920 VIEWPORT_HEIGHT=1080 npx cucumber-js --profile ui
HEADLESS=false VIEWPORT_WIDTH=390 VIEWPORT_HEIGHT=844 npx cucumber-js --profile ui
```

Override the environment file with `TEST_ENV`:

```bash
TEST_ENV=ci npx cucumber-js --profile ui   # loads config/.env.ci
```
