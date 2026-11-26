import {test,expect} from '@playwright/test'

//only run that testcase

test.describe.only('HomePageTests',()=>{   
    test('HomePageTitleTest',async({page})=>{
        console.log('This is Home Page Title Test')
    })
    test('HomePageHeadingTest',async({page})=>{
        console.log('This is Home Page Heading Test')
    })
})

//skip to that testcase
test.describe.skip('LoginTest',()=>{
    test('ValidLoginTest',async({page})=>{
        console.log('This is Valid Login Test')
    })
    test('InValidLoginTest',async({page})=>{
        console.log('This is InValid Login Test')
    })
})



