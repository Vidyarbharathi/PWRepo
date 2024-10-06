import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Today\'s Deals' }).click();
  console.log("")
  await page.getByRole('link', { name: 'POCO Onam Shopping store' }).click();
  await expect(page.getByLabel('Onam Shopping Store')).toBeVisible();
  
});
