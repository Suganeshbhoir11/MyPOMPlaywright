import{test,expect} from '@playwright/test';

test('Check Locators',async({page})=>{
    await page.goto('https://practicetestautomation.com/');
    await page.getByRole('button',{name:'Submit'}).click();
    await page.getByRole('link',{name:'blog'}).click();
    await page.getByText('Contact').click();
    await page.getByText('Home').click();
    await page.getByPlaceholder('Email Address').fill('test@example.com');
    await page.getByTitle('Hello').click();
    await page.getByAltText('logo image').click();
    await page.getByLabel('username').fill('testuser');
    await page.waitForTimeout(1000);
})