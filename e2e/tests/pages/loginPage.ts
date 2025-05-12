import { Page } from "playwright";
import * as LoginPageLocators from "../locators/loginLocators.json";
import BasePage from "./basePage";

export default class LoginPage extends BasePage{
    
    constructor(page:Page) {
        super(page);
    }

    async goToPage(){
        await this.page.goto('https://www.saucedemo.com/v1/');
        
    }

    async loginIntoApp() {
        await this.enter(LoginPageLocators.UserInput,'standard_user');
        await this.enter(LoginPageLocators.PasswordInput,'secret_sauce');
        await this.click(LoginPageLocators.submitButton)
        
        
    }

}