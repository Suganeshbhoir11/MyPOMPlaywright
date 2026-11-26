import{test,expect} from '@playwright/test';

test('CheckBox',async({page})=>{

    await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');
    await page.waitForTimeout(5000);

    //handle multiple checkbox method
    const allcheckbox = await page.locator('input[type="checkbox"]');
    //assertaion to check if the checkbox is enabled or not
    await expect(allcheckbox.first()).not.toBeChecked();
    
    await allcheckbox.first().check();
    await page.waitForTimeout(5000);

    //to check if the checkbox is checked or not
    console.log(await allcheckbox.first().isChecked());
    await allcheckbox.first().uncheck();
    await page.waitForTimeout(5000);

    console.log(await allcheckbox.first().isChecked());

    //isEnabled method to check if the checkbox is enabled or not
    console.log(await allcheckbox.nth(4).isEnabled());
    
    

})