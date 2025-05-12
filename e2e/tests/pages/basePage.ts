import { Page } from "playwright";

export default class BasePage {
    
    protected page:Page;
    constructor(page:Page) {
        this.page = page;
    }

    async enter(object:any,data:string) {
        await this.getLocator(object).fill(data,object['actOptions'])
        console.log(`Fill in ${object["description"]} with ${data}`);
        
    }

    async click(object:any){
        await this.getLocator(object).click(object['locator']);
        console.log(`Click on ${object["description"]}`);
        
    }

    getLocator(object:any){


        //object["locator"]-----> para acceder a la propiedad locator del json
        
        return this.page.locator(object["locator"],object["locatorOptions"]);
    }


}