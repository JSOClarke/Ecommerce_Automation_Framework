import { expect, Locator, Page } from "playwright/test";

export default class bookingPage{


    private page: Page;
    private start_date: Locator;
    private end_date: Locator;
    private submitButton_dates: Locator;
    private firstName_el: Locator;
    private lastName_el: Locator;
    private email_el: Locator;
    private phone_el: Locator;
    private submitButton_bookinginput: Locator;
    private bookingConfirmation_el: Locator;
    private bookErrorMessage_el: Locator;

    constructor(page: Page){
        this.page = page;
        this.submitButton_dates = this.page.getByRole('button', { name: 'Reserve Now' });
        this.firstName_el = this.page.locator('.room-firstname');
        this.lastName_el = this.page.locator('.room-lastname');
        this.email_el = this.page.locator('.room-email');
        this.phone_el = this.page.locator('.room-phone');
        this.submitButton_bookinginput = this.page.getByRole('button', { name: 'Reserve Now' });
        this.bookingConfirmation_el = this.page.getByRole('heading', { name: 'Booking Confirmed' })
        this.bookErrorMessage_el = this.page.locator('.class="alert alert-danger');

    }


    async selectBookDates(start_date: string, end_date:string){
        this.start_date = this.page.getByRole('cell', { name: start_date });
        this.end_date = this.page.getByRole('cell', { name: end_date });
        const startBox = await this.start_date.boundingBox();
        const endBox = await this.end_date.boundingBox();

    if (startBox && endBox) {
        await this.page.mouse.move(startBox.x + startBox.width / 2, startBox.y + startBox.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.move(endBox.x + endBox.width / 2, endBox.y + endBox.height / 2, { steps: 10 });
        await this.page.mouse.up();
    } else {
        throw new Error("Could not locate date cells on the page.");
    }
        }

    async submitDates(){
        await this.submitButton_dates.click();
    }

    async bookingInput(firstname: string, lastname:string, email:string, phone:string){

    await this.firstName_el.fill(firstname);
    await this.lastName_el.fill(lastname);
    await this.email_el.fill(email);
    await this.phone_el.fill(phone);
    }

    async submitBookingInput(){
        await this.submitButton_bookinginput.click();
    }

    async verify_booking_completion(){
    
    }

    async verify_booking_error(expectedErrors){
        for(const error of expectedErrors){
        // Fuzzy match the error message
        const regexError = new RegExp(error, 'i');
        await expect(this.page.getByRole('alert').filter({ hasText: regexError })).toBeVisible();
        }
    }
}