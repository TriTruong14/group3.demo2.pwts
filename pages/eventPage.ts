import { Page } from "@playwright/test";

export class EventPage {
  readonly page: Page;
  readonly eventTitle; // Locator for the event page title
  readonly lastYear; // Locator for the "Sự kiện sale cuối năm" link

  constructor(page: Page) {
    this.page = page;
    this.eventTitle = page.locator("(//h4[normalize-space()='Sự kiện công nghệ lớn nhất 2021'])");
    this.lastYear = page.locator("li[class='eventHeader courseCate'] a[class='active']"); // Locator for the "Sự kiện sale cuối năm" link

  }

    async gotoPage() {
        const url = process.env.EVENT_URL || "https://demo2.cybersoft.edu.vn/sukien";
        console.log(">> Navigating to:", url);
        await this.page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
        await this.eventTitle.waitFor({ state: "visible", timeout: 10000 });
    }

    async goToLastYearEvent(): Promise<void> {
        await this.lastYear.click();
    }
}