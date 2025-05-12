import { Page } from "playwright";
import * as HomePageLocators from "../locators/homePage.json";
import  BasePage  from "../pages/basePage";


export default class HomePage extends BasePage{

    constructor(page:Page) {
        super(page);
    }

    async waitForIcon(){
       const Icon = await this.getLocator(HomePageLocators.shoppingCart)
       Icon.isVisible();
       await this.click(HomePageLocators.shoppingCart); 
       await this.page.waitForTimeout(4000);
       
       return Icon
    }
}