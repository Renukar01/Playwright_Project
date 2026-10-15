import{test,expect} from '@playwright/test'

test("GET By Role", async({page})=>
{
await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
await page.getByRole("textbox",{name:'Enter your full name'}).fill("Renuka R")

await page.getByRole("textbox",{name:"Enter Rediffmail ID"}).fill("renukar4774@gmail.com")
await page.getByRole("button",{name:"Check availability"}).click()
await page.getByPlaceholder("Enter password").fill("Renuka@20")
//await page.locator("xpath=/html/body/div[2]/div[2]/form/div/div[7]/div/input").fill("Renuka@20")
//await page.locator("//input[@placeholder='Retype password']").fill("Renuka@20")
await page.getByLabel("Retype Password").fill("Renuka@20")
await page.waitForTimeout(3000)
})