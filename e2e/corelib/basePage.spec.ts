import {Given,When,Then,Before,After, AfterAll, BeforeAll} from "@cucumber/cucumber"
import { Browser,BrowserContext,Page,chromium, firefox } from "playwright";
import dotenv from "dotenv";


let browser:Browser;
let bCtxt:BrowserContext;
let page:Page;

BeforeAll(async function () {


    console.log('--------before all-------------');
    
    dotenv.config();

    let browserType = process.env.browser
    console.log(`Open browser ${browserType}`);
    

    switch (browserType) {
        case 'chrome':
            browser = await chromium.launch({
                headless:true,
                channel:"chrome",
                args:[
                    '--start-maximized'
                ]
            })
            break;
        case 'firefox':
            browser = await firefox.launch({
                headless:false,
                args:[
                    '--start-maximized'
                ]
            })
        case 'edge':
            browser = await chromium.launch({
                headless:true,
                channel:"msedge",
                args:[
                    '--start-maximized'
                ]
            })
    
        default:
            break;
    }
})

Before(async function () {
   
    bCtxt = await browser.newContext({
        viewport:null,
        javaScriptEnabled:true
    });
    page = await bCtxt.newPage();
    await page.goto(process.env.app_url!);

    console.log(`Open page ${process.env.app_url!}`);
    

})


After(async function () {
    await page.close();
})

AfterAll(async function () {
    console.log('------after all---------');
    
    await browser.close();
})



export function getPage():Page {
    return page
}