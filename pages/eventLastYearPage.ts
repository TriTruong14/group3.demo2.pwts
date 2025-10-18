import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class EventLastYearPage extends BasePage {
    readonly eventLastYearPageTitle; // Locator for the event last year page title

constructor(page: Page) {
    super(page); // Call the constructor of the BasePage class
    this.eventLastYearPageTitle = page.locator("(//h3[contains(text(),'Có gì đó sai ở đây')])[1]");
}

async gotoEventLastYearPage(): Promise<void> {

    const url = process.env.EVENT_LAST_YEAR_URL;
    if (!url) throw new Error ('Missing EVENT_LAST_YEAR_URL in .env');
    await this.navigateTo(url);
}
async verifyloaded(): Promise<void> {
    await this.eventLastYearPageTitle.waitFor(); // Wait for the event last year page title to be visible
}

}