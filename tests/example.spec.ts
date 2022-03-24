import { test, expect } from '@playwright/test';

test.describe('mode switcher', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/docs/playground/button');
  });

  test('it should show load two iframes, one for iOS and one for MD', async ({ page }) => {
    const iframes = page.locator('.playground iframe');
    await expect(iframes).toHaveCount(2);
  });

  test('it should load the iOS iframe first', async ({ page }) => {
    const hiddenFrame = page.locator('.playground iframe.frame-hidden');
    const visibleFrame = page.locator('.playground iframe:not(.frame-hidden)');

    await expect(await hiddenFrame.getAttribute('src')).toContain('?ionic:mode=md');
    await expect(await visibleFrame.getAttribute('src')).toContain('?ionic:mode=ios');
  });

  test('clicking the MD button should show the MD iframe', async ({ page }) => {
    await page.click('.playground #mode-group button:last-of-type');

    const hiddenFrame = page.locator('.playground iframe.frame-hidden');
    const visibleFrame = page.locator('.playground iframe:not(.frame-hidden)');

    await expect(await hiddenFrame.getAttribute('src')).toContain('?ionic:mode=ios');
    await expect(await visibleFrame.getAttribute('src')).toContain('?ionic:mode=md');
  })

  test('clicking the MD button should show the iOS iframe', async ({ page }) => {
    await page.click('.playground #mode-group button:last-of-type');

    const hiddenFrame = page.locator('.playground iframe.frame-hidden');
    const visibleFrame = page.locator('.playground iframe:not(.frame-hidden)');

    await expect(await hiddenFrame.getAttribute('src')).toContain('?ionic:mode=ios');
    await expect(await visibleFrame.getAttribute('src')).toContain('?ionic:mode=md');

    await page.click('.playground #mode-group button:first-of-type');

    const hiddenFrameAgain = page.locator('.playground iframe.frame-hidden');
    const visibleFrameAgain = page.locator('.playground iframe:not(.frame-hidden)');

    await expect(await hiddenFrameAgain.getAttribute('src')).toContain('?ionic:mode=md');
    await expect(await visibleFrameAgain.getAttribute('src')).toContain('?ionic:mode=ios');
  })
});
