import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { EventLastYearPage } from "./eventLastYearPage";

export class EventPage extends BasePage {
  readonly eventTitle; // Locator for the event page title
  readonly menuEvent; // Locator for the submenu of the Su kiện page
  readonly eventLastYear; // Locator for the link to Sự kiện sale cuối năm

  constructor(page: Page) {
    super(page); // Call the constructor of the BasePage class
    this.eventTitle = page.locator("(//h4[normalize-space()='Sự kiện công nghệ lớn nhất 2021'])");
    this.menuEvent = page.locator("(//a[@class='active'][contains(text(),'Sự kiện')])[1]");
    this.eventLastYear = page.locator("(//a[contains(text(),'Sự kiện Sale Cuối Năm')])[1]");
  }

    async gotoPage() {

        const url = process.env.EVENT_URL;
        if (!url) throw new Error ('Missing EVENT_URL in .env');
        await this.navigateTo(url); // Use the navigateTo method from BasePage
        await this.eventTitle.waitFor(); // Wait for the event title to be visible

        // const url = process.env.EVENT_URL || "https://demo2.cybersoft.edu.vn/sukien";
        // console.log(">> Navigating to:", url);
        // await this.page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
        // await this.eventTitle.waitFor({ state: "visible", timeout: 10000 });
    }

    async goToLastYearEvent(): Promise<EventLastYearPage> {
      await this.menuEvent.hover(); // Hover on the Sự kiện menu to reveal the submenu
      await this.eventLastYear.click(); // Click on the Sự kiện sale cuối năm link

      const eventLastYearPage = new EventLastYearPage(this.page);
      await eventLastYearPage.verifyloaded(); // Verify the event last year page is loaded
      return eventLastYearPage;
    }
}