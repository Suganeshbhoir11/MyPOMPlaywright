import{test as base} from '@playwright/test'
import {LoginPage} from '../pages/loginPage'
import{ProductListPage} from '../pages/ProductlistPage'

type myfixture =
{
    loginpage:LoginPage;
    productlistpage:ProductListPage;
}

export const test = base.extend<myfixture>({

    loginpage: async({page},use)=>{

        await use(new LoginPage(page));

    },

    productlistpage: async({page},use)=>{
        await use(new ProductListPage(page));
    }

})

export{expect} from '@playwright/test'