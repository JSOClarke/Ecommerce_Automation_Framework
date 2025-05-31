import { test, expect, Page } from "playwright/test";
import { invalidInput } from "../data/invalidInput";
import bookingPage from "../../pages/bookingPage";


test.describe('@Regression, Verifiy bad inputs for bookings page', () => {
    for (const {firstname, lastname, email, phone, expectedError} of invalidInput){
        test(`Should show error: ${expectedError}`, async ({page}) => {

            await page.goto('https://automationintesting.online/reservation/1?checkin=2025-05-27&checkout=2025-05-28');
            const bookP = new bookingPage(page);
            await bookP.selectBookDates('11', '13');
            await bookP.submitDates();
            await bookP.bookingInput(firstname, lastname, email,phone);
            await bookP.submitBookingInput();
            await bookP.verify_booking_error(expectedError);
        })

    }


});
