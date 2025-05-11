import {Given,When,Then,Before,After, AfterAll} from "@cucumber/cucumber"
import { Browser,BrowserContext,Page,chromium } from "playwright";


let browser:Browser;
let bCtxt:BrowserContext;
let page:Page;


Before(async function () {
    browser = await chromium.launch({
        headless:false,
        channel:"chrome",
        args:[
            '--start-maximized'
        ]
    })
    bCtxt = await browser.newContext({
        viewport:null,
        javaScriptEnabled:true
    });
    page = await bCtxt.newPage();
})


After(async function () {
    await page.close();
    await browser.close();
})

export function getPage():Page {
    return page
}