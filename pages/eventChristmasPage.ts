import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class EventChristmasPage extends BasePage {
    readonly christmasEventPageTitle; // Locator for the Christmas event page title

constructor(page: Page) {
    super(page); // Call the constructor of the BasePage class
    this.christmasEventPageTitle = page.locator("(//h3[contains(text(),'Có gì đó sai ở đây')])[1]");
}

async gotoChristmasEventPage(): Promise<void> {

    const url = process.env.EVENT_CHRISTMAS_URL;
    if (!url) throw new Error ('Missing EVENT_CHRISTMAS_URL in .env');
    await this.navigateTo(url);
}
async verifyloaded(): Promise<void> {
    await this.christmasEventPageTitle.waitFor(); // Wait for the Christmas event page title to be visible
}
}