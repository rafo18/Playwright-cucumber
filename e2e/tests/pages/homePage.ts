import { Page } from "playwright";
import * as HomePageLocators from "../locators/homePage.json";

export default class HomePage {

    page:Page;

    constructor(page:Page) {
        this.page = page;
    }

    async waitForIcon(){
       const Icon = await this.page.locator(HomePageLocators.shoppingCart.locator).isVisible();
       await this.page.locator(HomePageLocators.shoppingCart.locator).click();
       await this.page.waitForTimeout(4000);

       return Icon;
    }
}