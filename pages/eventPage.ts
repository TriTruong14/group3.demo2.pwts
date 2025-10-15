import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class EventPage extends BasePage {
  readonly eventTitle; // Locator for the event page title
  readonly menuEvent; // Locator for the submenu of the Su kiện page
  readonly eventLastYear; // Locator for the link to Sự kiện sale cuối năm

  constructor(page: Page) {
    super(page); // Call the constructor of the BasePage class
    this.eventTitle = page.locator("(//h4[normalize-space()='Sự kiện công nghệ lớn nhất 2021'])");
    this.menuEvent = page.locator("(//a[@class='active'][contains(text(),'Sự kiện')])[1]");
    this.eventLastYear = page.locator("//a[normalize-space()='SỰ KIỆN SALE CUỐI NĂM']");
        
    // this.goToLastYearEvent = async (): Promise<void> => {
    //   await this.lastYear.click();
    // }
    // // Note: The method goToLastYearEvent is defined here to ensure it has access to the lastYear locator

  }

    async gotoPage() {

        const url = process.env.EVENT_URL;
        if (!url) throw new Error ('Missing EVENT_URL in .env');
        await this.navigateTo(url); // Use the navigateTo method from BasePage
        await this.eventTitle.waitFor({ state: "visible", timeout: 10000 }); // Wait for the event title to be visible

        // const url = process.env.EVENT_URL || "https://demo2.cybersoft.edu.vn/sukien";
        // console.log(">> Navigating to:", url);
        // await this.page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
        // await this.eventTitle.waitFor({ state: "visible", timeout: 10000 });
    }

    async goToLastYearEvent(): Promise<void> {
      await this.menuEvent.hover(); // Hover on the Sự kiện menu to reveal the submenu
      await this.eventLastYear.waitFor(); // Wait for Submenu to be visible
      await this.eventLastYear.click(); // Click on the Sự kiện sale cuối năm link
      await this.eventTitle.waitFor({ state: "visible", timeout: 10000 }); // Wait for the event title to be visible on the new page
    }
}