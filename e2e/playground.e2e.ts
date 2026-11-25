import { readFileSync } from 'node:fs';
import { expect, test, type Locator, type Page } from '@playwright/test';

/** The tab lists of the docs' framework tabs. Only their tabs control a panel, which tells them apart from a playground's. */
const docsFrameworkTabs = (page: Page) => page.locator('[role=tablist]:has([role=tab][aria-controls])');

const frameworkTab = (scope: Locator, name: string) =>
  scope.getByRole('tablist', { name: 'Framework' }).getByRole('tab', { name, exact: true });

/**
 * The modal page's "child state" playground, which has several files per framework and no JavaScript code.
 *
 * Its demo only loads once it scrolls into view, and its files change with the framework, so it is found
 * by position rather than by what it contains.
 */
async function openChildStatePlayground(page: Page) {
  await page.goto('api/modal');
  const playgrounds = page.locator('.playground');
  const childState = playgrounds.filter({ has: page.getByRole('tab', { name: 'src/app/child.component.ts' }) });
  await expect(childState).toHaveCount(1);

  const index = await playgrounds.evaluateAll((elements) =>
    elements.findIndex((element) => element.textContent?.includes('src/app/child.component.ts'))
  );
  return playgrounds.nth(index);
}

/** The source of an example file, as written in its Markdown code fence. */
function readExampleFile(path: string) {
  const markdown = readFileSync(`static/usage/v9/modal/can-dismiss/child-state/${path}`, 'utf8');
  return markdown.replace(/^```\w*\n/, '').replace(/\n```\n*$/, '');
}

test.describe('framework choice', () => {
  test('is shared between the docs tabs and playgrounds, and kept across reloads', async ({ page }) => {
    await page.goto('api/alert');
    const docsTabs = docsFrameworkTabs(page).first();
    const playground = page.locator('.playground').first();

    await docsTabs.getByRole('tab', { name: 'React', exact: true }).click();
    await expect(frameworkTab(playground, 'React')).toHaveAttribute('aria-selected', 'true');

    await frameworkTab(playground, 'Vue').click();
    await expect(docsTabs.getByRole('tab', { name: 'Vue', exact: true })).toHaveAttribute('aria-selected', 'true');

    await page.reload();
    await expect(frameworkTab(playground, 'Vue')).toHaveAttribute('aria-selected', 'true');
    await expect(docsTabs.getByRole('tab', { name: 'Vue', exact: true })).toHaveAttribute('aria-selected', 'true');
  });

  test('shows an Angular (Standalone) pick as Angular where there is no Standalone code', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('docusaurus.tab.framework', 'angular-standalone'));
    await page.goto('api/alert');

    await expect(frameworkTab(page.locator('.playground').first(), 'Angular')).toHaveAttribute('aria-selected', 'true');
  });

  test('disables a framework the playground has no code for, and skips it with the arrow keys', async ({ page }) => {
    const playground = await openChildStatePlayground(page);

    await expect(frameworkTab(playground, 'JavaScript')).toBeDisabled();

    await frameworkTab(playground, 'Angular').focus();
    await page.keyboard.press('ArrowRight');
    await expect(frameworkTab(playground, 'React')).toBeFocused();

    await page.keyboard.press('Enter');
    await expect(frameworkTab(playground, 'React')).toHaveAttribute('aria-selected', 'true');
  });
});

test.describe('file tabs', () => {
  test('show one file at a time', async ({ page }) => {
    const playground = await openChildStatePlayground(page);
    const fileTabs = playground.locator('.playground__tabs');

    await expect(fileTabs.getByRole('tab')).toHaveText([
      'src/app/example.component.html',
      'src/app/example.component.ts',
      'src/app/child.component.html',
      'src/app/child.component.ts',
    ]);
    await expect(playground.locator('#playground_angular_src_app_example_component_html')).toBeVisible();

    await fileTabs.getByRole('tab', { name: 'src/app/child.component.ts' }).click();
    await expect(playground.locator('#playground_angular_src_app_child_component_ts')).toBeVisible();
    await expect(playground.locator('#playground_angular_src_app_example_component_html')).toBeHidden();
  });

  test('select the first file after switching frameworks', async ({ page }) => {
    const playground = await openChildStatePlayground(page);
    const fileTabs = playground.locator('.playground__tabs');

    await fileTabs.getByRole('tab', { name: 'src/app/child.component.ts' }).click();
    await frameworkTab(playground, 'Vue').click();

    await expect(fileTabs.getByRole('tab', { name: 'src/components/Example.vue' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    await expect(playground.locator('#playground_vue_src_components_Example_vue')).toBeVisible();
  });

  test('move focus with the arrow keys and select with Enter', async ({ page }) => {
    const playground = await openChildStatePlayground(page);
    const fileTabs = playground.locator('.playground__tabs');
    const secondTab = fileTabs.getByRole('tab', { name: 'src/app/example.component.ts' });

    await fileTabs.getByRole('tab', { name: 'src/app/example.component.html' }).focus();
    await page.keyboard.press('ArrowRight');
    await expect(secondTab).toBeFocused();
    await expect(secondTab).toHaveAttribute('aria-selected', 'false');

    await page.keyboard.press('Enter');
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
  });
});

test('StackBlitz receives every file of a multi-file example', async ({ page, context }) => {
  // The SDK posts the project to StackBlitz in a new window. Answer it here, so the test stays offline.
  const request = new Promise<URLSearchParams>((resolve) => {
    context.route('https://stackblitz.com/**', (route) => {
      resolve(new URLSearchParams(route.request().postData() ?? ''));
      route.fulfill({ body: '' });
    });
  });

  const playground = await openChildStatePlayground(page);
  await expect(playground.locator('.playground__tabs')).toBeVisible();

  // The StackBlitz button is the first icon button, and has no accessible name to find it by.
  await playground.locator('.playground__control-group--end button').first().click();
  const form = await request;

  for (const [file, source] of [
    ['src/app/example.component.html', 'angular/example_component_html.md'],
    ['src/app/example.component.ts', 'angular/example_component_ts.md'],
    ['src/app/child.component.html', 'angular/child_component_html.md'],
    ['src/app/child.component.ts', 'angular/child_component_ts.md'],
  ]) {
    // A form post sends every line break as CRLF.
    expect(form.get(`project[files][${file}]`)?.replace(/\r\n/g, '\n'), file).toBe(readExampleFile(source));
  }
});

test.describe('mode', () => {
  test('switches the demo and is kept by every playground on the page', async ({ page }) => {
    await page.goto('api/alert');
    const playgrounds = page.locator('.playground');
    const first = playgrounds.first();
    const last = playgrounds.last();

    await first.getByRole('button', { name: 'MD', exact: true }).click();
    await expect(first.locator('iframe[src*="ionic:mode=md"]')).toBeVisible();
    await expect(first.locator('iframe[src*="ionic:mode=ios"]')).toBeHidden();

    // A playground out of view picks up the mode once it scrolls into view.
    await last.scrollIntoViewIfNeeded();
    await expect(last.locator('iframe[src*="ionic:mode=md"]')).toBeVisible();

    await page.reload();
    await first.scrollIntoViewIfNeeded();
    await expect(first.locator('iframe[src*="ionic:mode=md"]')).toBeVisible();
  });

  test('disables the other mode for a playground restricted to one, and skips it with the Tab key', async ({
    page,
  }) => {
    // A stored iOS pick must not override a playground that only runs in MD.
    await page.addInitScript(() => localStorage.setItem('playground_mode', 'ios'));
    await page.goto('api/input');

    // The "fill" playground is the input page's only MD-only playground.
    const playground = page
      .locator('.playground')
      .filter({ has: page.getByRole('button', { name: 'iOS', exact: true, disabled: true }) });
    await playground.scrollIntoViewIfNeeded();

    await expect(playground.locator('iframe[src*="ionic:mode=md"]')).toBeVisible();
    await expect(playground.locator('iframe[src*="ionic:mode=ios"]')).toBeHidden();

    await playground.getByRole('tablist', { name: 'Framework' }).getByRole('tab', { selected: true }).focus();
    await page.keyboard.press('Tab');
    await expect(playground.getByRole('button', { name: 'MD', exact: true })).toBeFocused();
  });
});
