import {test,expect} from '@playwright/test'

test("Frames",async({page})=>
{
    await page.goto("https://vinothqaacademy.com/iframe/")
    const allFrame=page.frames()
    const noofFrame=allFrame.length
    console.log("Number of Frames =",noofFrame)
    for(let i of allFrame)
    {
        console.log("URL =",i.url())
        console.log("Name =",i.name())
    }
    const fFrame=page.frame('employeetable')
    await fFrame.locator('#nameInput').fill('Renuka')
    await page.waitForTimeout(2000)

})