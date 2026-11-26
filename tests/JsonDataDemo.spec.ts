import{test,expect} from '@playwright/test';
import loginData from '../TestData/loginData.json'

test('LoginTest',async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.waitForTimeout(2000);
    await page.getByLabel('Username').fill(loginData.username);
    await page.getByLabel('Password').fill(loginData.password);
    await page.getByRole('button',{name:'Submit'}).click();
    await page.waitForTimeout(5000);
})