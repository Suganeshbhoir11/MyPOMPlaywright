import{test,expect} from '@playwright/test';

test('AsyncAwait_Demo',async({page})=>{

    await page.goto('https://bstackdemo.com/');
    await expect(page).toHaveTitle('StackDemo');

    await page.getByRole('link',{name:'Sign In'}).click();
    await page.waitForTimeout(5000);

})