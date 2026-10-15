export class LoginPage{
    constructor(page){
        this.page=page
        this.userNameField=page.locator('#ulogin')
        this.passwordField=page.locator('#upass')
        this.LoginBtn=page.locator('#sub_logbtn')
    }
    async seValues(userName,Password)
    {
        await this.userNameField.fill(userName)
        await this.passwordField.fill(Password)
    }
    async btnClick()
    {
        await this.LoginBtn.click()
    }
    async titleVerifivation()
    {
        return await this.page.title()
    }
}