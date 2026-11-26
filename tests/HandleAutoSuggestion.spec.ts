import{test,expect} from '@playwright/test';

test('AutoSuggest',async({page})=>{

    await page.goto('https://www.youtube.com/@LetsLearnQA');
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Search').fill('Playwright');
    await page.waitForSelector('.ytSuggestionComponentLeftContainer');

    const allsuggestions = await page.locator('.ytSuggestionComponentLeftContainer');
    
    const count = await allsuggestions.count();
    console.log('Total Suggestions:- '+count);

    for(let i=0;i<count;i++)
    {
        const text = await allsuggestions.nth(i).textContent();
        console.log(text);
        await expect(text).toContain('playwright');
    }

})