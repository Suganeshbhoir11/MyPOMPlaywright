import{test,expect} from '@playwright/test'

test('Assertion',async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.waitForTimeout(2000);

    const username_label = await page.getByLabel('Username');
    //check visible
    await expect.soft(username_label).not.toBeVisible(); 
    //soft assertion keep run the flow 
    //await username_label.screenshot({path:'username.png'});

    //check enable
    await expect(username_label).toBeEnabled();
    
    //check have a text
    const heading = await page.locator('h2');
    await expect(heading).toHaveText('Test login');
    //contains
    await expect(heading).toContainText('Test')
    //to have url & to have title
    await username_label.fill('student');
    await page.getByLabel('password').fill('Password123');
    await page.getByRole('button',{name:'Submit'}).click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
    await page.waitForTimeout(2000);
})