import page, { Page } from "@playwright/test"

export class DashBoard {

    readonly page:Page;

    constructor(page:Page) {
        this.page = page;
    }


    async logMessage(): Promise<void> {
        console.log("clicked");
        
    }

}