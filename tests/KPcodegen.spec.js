import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://keralaproperty.in/member/login/');
  await page.locator('#ulogin').click();
  await page.locator('#ulogin').fill('Renuka');
  await page.locator('#upass').click();
  await page.locator('#upass').fill('Renuka@20');
  await page.getByRole('button', { name: 'Login' }).click();
});