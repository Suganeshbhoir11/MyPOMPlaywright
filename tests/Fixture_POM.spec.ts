import{test,expect} from '../fixtures/pageObjectFixture'

test('ValidatedLogin',async({page,loginpage,productlistpage})=>{

    
    await loginpage.openApplication();
    await loginpage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(5000);

})

test('AddCart',async({page,loginpage,productlistpage})=>{

    await loginpage.openApplication();
    await loginpage.doLogin();
    await productlistpage.AddTocartButton();
    await page.waitForTimeout(5000);

})

