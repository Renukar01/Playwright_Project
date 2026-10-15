import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://keralaproperty.in/member/register/');
  await page.locator('#listowner').selectOption('builder');
  await page.locator('#utitle').click();
  await page.locator('#utitle').fill('Renuka');
  await page.locator('#umail').click();
  await page.locator('#umail').fill('renukar@123gmailcom');
  await page.locator('#umail').click();
  await page.locator('#umail').click();
  await page.locator('#umail').fill('renukar@123gmail.com');
  await page.locator('#memberpass').click();
  await page.locator('#memberpass').fill('Renuka@20');
  await page.locator('#repass').click();
  await page.locator('#repass').fill('Renuka@20');
  await page.locator('#umobile').click();
  await page.locator('#umobile').fill('6238708601');
  await page.screenshot({path:".//Screenshot//screen.png",fullPage:true})
  await page.getByRole('button', { name: 'Create Account' }).click();
});