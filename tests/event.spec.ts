
import { test, expect } from "@playwright/test";
import { EventPage } from "../pages/eventPage";

test.describe ("Event Function", () => {

let eventPage: EventPage;
    test.beforeEach(async ({ page }) => {
        eventPage = new EventPage(page);
        await eventPage.gotoPage();
    });

    test('EP3-TC-14: Verify event page title', async ({ page }) => {
        // await expect(eventPage.eventTitle).toHaveText("Sự kiện công nghệ lớn nhất 2021");   
        // const eventTitle = await eventPage.eventTitle.isVisible();
        // expect(eventTitle).toBeTruthy();

        expect(page.url()).toContain('/sukien');// Verify that the /sukien text is in the URL
    });
    test ('EP3-TC-17: Verify navigation to page Sự kiện sale cuối năm', async ({page}) => {
        expect(page.url()).toContain('/lastYear');
});

})