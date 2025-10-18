import { test, expect } from "@playwright/test";
import { EventPage } from "../pages/eventPage";
import { EventLastYearPage } from "../pages/eventLastYearPage";

test.describe.serial ("Event Function", () => {

let eventPage: EventPage;
    test.beforeEach(async ({ page }) => {
        eventPage = new EventPage(page);
        await eventPage.gotoPage();
    });

    test('EP3-TC-14: Verify event page title', async ({ page }) => {

        await expect(eventPage.eventTitle).toHaveText(/Sự kiện công nghệ lớn nhất \d{4}/); // Verify the event page title contains the correct text with any year (using regex)
        //    await expect(page.url()).toContain('/sukien'); // Verify the URL contains /sukien to confirm navigation to the event page 
        // await expect(eventPage.eventTitle).toHaveText("Sự kiện công nghệ lớn nhất 2021"); // Verify the event page title is correct
        // await expect(eventPage.eventTitle).toHaveText("Sự kiện công nghệ lớn nhất 2021"); // Verify the event page title is correct
        // await expect(eventPage.eventTitle).toBeVisible(); // Verify the event page title is visible on the page
        // await expect(eventPage.eventTitle).toBeEnabled(); // Verify the event page title is enabled (not disabled) 
        // await expect(eventPage.eventTitle).toBeAttached(); // Verify the event page title is attached to the DOM 
        // await expect(eventPage.eventTitle).not.toBeHidden(); // Verify the event page title is not hidden on the page 
        // await expect(eventPage.eventTitle).toHaveCount(1); // Verify there is exactly one event page title on the page 
        // await expect(eventPage.eventTitle).toHaveClass(/event-header/); // FAILED
        // await expect(eventPage.eventTitle).toHaveAttribute("class", /event-header/); // FAILED
        // await expect(eventPage.eventTitle).toHaveCSS("font-size", "40px"); // Verify the event page title has the correct font size (assuming it's 32px)
        // await expect(eventPage.eventTitle).toHaveCSS("color", "rgb(51, 51, 51)"); // FAILED
        // await expect(eventPage.eventTitle).toHaveText(/Sự kiện công nghệ lớn nhất 2021/); // Verify the event page title contains the correct text (using regex for partial match)
        // await expect(eventPage.eventTitle).toHaveText(/Sự kiện công nghệ lớn nhất (2020|2021|2022|2023)/); // Verify the event page title contains the correct text with specific years (using regex)
        // await expect(eventPage.eventTitle).toHaveText(/Sự kiện công nghệ lớn nhất (?!2019)\d{4}/); // Verify the event page title contains the correct text with any year except 2019 (using regex)
        // await expect(eventPage.eventTitle).toHaveText(/Sự kiện công nghệ lớn nhất 202[0-3]/); // Verify the event page title contains the correct text with years from 2020 to 2023 (using regex)
        // await expect(eventPage.eventTitle).toHaveText(/Sự kiện công nghệ lớn nhất 202[0-3]/i); // Verify the event page title contains the correct text with years from 2020 to 2023, case insensitive (using regex)

    });

    test ('EP3-TC-17: Verify page Sự Kiện sale cuối năm hiển thị đúng khi truy cập', async ({ page }) => {
        const eventLastYearPage = await eventPage.goToLastYearEvent();
        await expect(eventLastYearPage.eventLastYearPageTitle).toHaveText('Có gì đó sai ở đây');
        await expect(page).toHaveURL(/lastYear/);
    });

})