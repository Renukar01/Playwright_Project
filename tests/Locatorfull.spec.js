import { test, expect } from '@playwright/test';

test('login Validation', async ({ page }) => {

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

    const fullname = page.getByPlaceholder("Enter your full name");
    await fullname.fill("Renuka");

    const chooseId = page.getByRole('textbox', { name: "Enter Rediffmail ID" });
    await chooseId.fill("Renuka20");

    const hom = page.getByText('Rediff Home');
    await hom.click();

    
    await page.waitForTimeout(3000)
});