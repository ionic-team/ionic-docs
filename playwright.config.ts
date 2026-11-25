/**
 * Browser tests for the site's interactive components, run against the built
 * site. Run `npm run build:preview` first, then `npm run test:e2e`.
 *
 * Tests end in `.e2e.ts`, as in ionic-framework, because Vitest picks up every
 * `.spec.ts` and `.test.ts`.
 */

import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://localhost:3100/docs/';

export default defineConfig({
  testDir: './e2e',
  testMatch: '*.e2e.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : [['list'], ['html']],
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run serve -- --port 3100 --no-open',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
