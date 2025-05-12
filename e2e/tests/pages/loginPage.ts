import { Page } from "playwright";
import * as LoginPageLocators from "../locators/loginLocators.json";
import BasePage from "./basePage";

export default class LoginPage extends BasePage{
    
    constructor(page:Page) {
        super(page);
    }

    async goToPage(){
        return
    }

    async loginIntoApp() {
        await this.enter(LoginPageLocators.UserInput,process.env.user_name!);
        await this.enter(LoginPageLocators.PasswordInput,process.env.password!);
        await this.click(LoginPageLocators.submitButton)
        
        
    }

}