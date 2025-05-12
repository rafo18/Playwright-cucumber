import {Given,When,Then,Before,After} from "@cucumber/cucumber"
import { Browser,BrowserContext,Page,chromium } from "playwright";
import { expect } from "@playwright/test";
import { getPage } from "../../corelib/basePage.spec";
import  HomePage  from "../pages/homePage";
import  LoginPage  from "../pages/loginPage";

let homepage:HomePage;
let loginPage:LoginPage;

Given('User is a homepage',async function () {
    console.log('----Given-----');
    
    loginPage = new LoginPage(getPage());
    await loginPage.goToPage();

});

When('User enter login details', async function () {
    console.log('-------When---------');
    
    await loginPage.loginIntoApp(); 
});

Then('Then close the browser',async function () {
    console.log('--------Then----------');
    homepage = new HomePage(getPage());
    const isVisible = await homepage.waitForIcon();
    expect(isVisible).toBeTruthy();
    
});



