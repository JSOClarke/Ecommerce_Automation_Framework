import {test, expect, Page} from "playwright/test";
import homePage from "../../pages/homePage";
import bookingPage from "../../pages/bookingPage";
import { validInput } from "../data/validInput";

test('@Sanity, Verify that the user can complete their [Happy Path] and complete booking', async ({page}) => {

    await page.goto('https://automationintesting.online/reservation/12?checkin=2025-05-27&checkout=2025-05-28');

    // const homeP = new homePage(page);
    
    // await homeP.clickRoomButton();   
    // await homeP.clickBookNow();

    // await expect(page).toHaveURL( /reservation/ )

    const bookingP = new bookingPage(page);
    // await page.waitForTimeout(3000);
    // await page.screenshot({path: 'before_date_selection.png'})
    await bookingP.selectBookDates('14','17');
    // await page.screenshot({path: 'after_date_selection.png'})
    await bookingP.submitDates();
    await bookingP.bookingInput(validInput[0].firstname, validInput[0].lastname, validInput[0].email, validInput[0].phone);

    // await page.waitForTimeout(3000);
    // await page.screenshot({path: 'input_selection.png'})
    await bookingP.submitBookingInput();
    // await page.screenshot({path: 'error.png'})
    await bookingP.verify_booking_completion();
    // await page.screenshot({path: 'expectbed_page.png'})
    
    
    const bag = 1;

})