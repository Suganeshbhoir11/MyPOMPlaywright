import {Page,Locator} from '@playwright/test'
import { TEST_DATA } from '../TestData/TestData';

export class LoginPage
{
    page:Page;
    usernameField:Locator;
    PasswordField:Locator;
    LoginButton:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.usernameField = page.locator('#user-name');
        this.PasswordField = page.locator('#password');
        this.LoginButton = page.locator('#login-button');
    }
async openApplication()
{
    await this.page.goto('/') //config file base url

}

async doLogin()
{
    await this.usernameField.fill(TEST_DATA.user.username);
    await this.PasswordField.fill(TEST_DATA.user.password);
    await this.LoginButton.click();
}

}