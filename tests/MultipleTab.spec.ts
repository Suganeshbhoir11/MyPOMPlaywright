import{test,expect} from '@playwright/test'

test('MultipleTab',async({page,context})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(2000);

    const pagepromise = context.waitForEvent('page');
    
    await page.getByRole('link',{name:'OrangeHRM, Inc'}).click();

    const newpage = await pagepromise;
    console.log(await newpage.title());

    await page.bringToFront(); //bring the old page in front
    console.log(await page.title());

    await page.waitForTimeout(5000);

})