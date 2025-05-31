import { Locator, Page } from "playwright/test";

export default class homePage{
    private page: Page;
    private roomButton: Locator;
    private bookingButton: Locator
    private amentiesButton: Locator;
    private locationButton: Locator;
    private contactButton: Locator;
    private adminButton: Locator;
    private bookNowCTAButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.roomButton = this.page.locator('#navbarNav').getByRole('link', { name: 'Rooms' })
        this.bookingButton = this.page.locator('#navbarNav').getByRole('link', { name: 'Booking' })
        this.amentiesButton = this.page.getByRole('link', { name: 'Amenities' })
        this.locationButton = this.page.getByRole('link', { name: 'Location' })
        this.contactButton = this.page.locator('#navbarNav').getByRole('link', { name: 'Contact' })
        this.adminButton = this.page.getByRole('link', { name: 'Admin', exact: true })
        this.bookNowCTAButton = this.page.getByRole('link', { name: 'Book now', exact: true }).nth(1);
        //page.locator('div').filter({ hasText: /^£100 per nightBook now$/ }).getByRole('link')
        
        //page.getByRole('link', { name: 'Book now', exact: true })
    }

    async clickRoomButton(){
        await this.roomButton.click();
    }
    
    async clickBookNow(){
        await this.bookNowCTAButton.click();
    }

    
}