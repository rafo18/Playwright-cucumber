import { Page } from "playwright";
import * as HomePageLocators from "../locators/homePage.json";
import  BasePage  from "../pages/basePage";


export default class HomePage extends BasePage{

    constructor(page:Page) {
        super(page);
    }

    async waitForIcon(){
       const Icon = await this.page.locator(HomePageLocators.shoppingCart.locator).isVisible();
       await this.page.locator(HomePageLocators.shoppingCart.locator).click();
       await this.page.waitForTimeout(4000);

       return Icon;
    }
}