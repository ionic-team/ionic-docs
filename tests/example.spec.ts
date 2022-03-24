import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/docs/playground/button');
});

test.describe('mode switcher', () => {
  test('it should show load two iframes, one for iOS and one for MD', async ({ page }) => {
    const iframes = await page.locator('.playground iframe');
    expect(await iframes.count()).toEqual(2);
  });

  test('it should load the iOS iframe first', async ({ page }) => {
    const hiddenFrame = await page.locator('.playground iframe.frame-hidden');
    const visibleFrame = await page.locator('.playground iframe:not(.frame-hidden)');

    expect(await hiddenFrame.getAttribute('src')).toContain('?ionic:mode=md');
    expect(await visibleFrame.getAttribute('src')).toContain('?ionic:mode=ios');
  });

  test('clicking the MD button should show the MD iframe', async ({ page }) => {
    await page.click('.playground #mode-group button:last-of-type');

    const hiddenFrame = await page.locator('.playground iframe.frame-hidden');
    const visibleFrame = await page.locator('.playground iframe:not(.frame-hidden)');

    expect(await hiddenFrame.getAttribute('src')).toContain('?ionic:mode=ios');
    expect(await visibleFrame.getAttribute('src')).toContain('?ionic:mode=md');
  })

  test('clicking the MD button should show the iOS iframe', async ({ page }) => {
    await page.click('.playground #mode-group button:last-of-type');

    const hiddenFrame = await page.locator('.playground iframe.frame-hidden');
    const visibleFrame = await page.locator('.playground iframe:not(.frame-hidden)');

    expect(await hiddenFrame.getAttribute('src')).toContain('?ionic:mode=ios');
    expect(await visibleFrame.getAttribute('src')).toContain('?ionic:mode=md');

    await page.click('.playground #mode-group button:first-of-type');

    const hiddenFrameAgain = await page.locator('.playground iframe.frame-hidden');
    const visibleFrameAgain = await page.locator('.playground iframe:not(.frame-hidden)');

    expect(await hiddenFrameAgain.getAttribute('src')).toContain('?ionic:mode=md');
    expect(await visibleFrameAgain.getAttribute('src')).toContain('?ionic:mode=ios');
  })
});
