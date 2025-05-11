import { Page } from "playwright";
import * as LoginPageLocators from "../locators/loginLocators.json";
import BasePage from "./basePage";

export default class LoginPage extends BasePage{
    
    constructor(page:Page) {
        super(page);
    }

    async goToPage(){
        await this.page.goto('https://www.saucedemo.com/v1/');
        console.log('------page-------');
        
    }

    async loginIntoApp() {
        await this.page.locator(LoginPageLocators.UserInput.locator).fill('standard_user');
        await this.page.locator(LoginPageLocators.PasswordInput.locator).fill('secret_sauce');
        await this.page.locator(LoginPageLocators.submitButton.locator).click();
        console.log('-----page2-----');
        
    }

}