// this will hold all of the non test logic
import { Locator, Page} from "playwright/test";
export default class contactPage{

    private page: Page
    private name: Locator;
    private email: Locator;
    private phone: Locator;
    private subject: Locator;
    private message: Locator;
    private personalbutton: Locator;
    private submitButton: Locator;
    

    constructor(page){

        // inside the contructor class define the locators that are going to be used.
        this.page = page;
        this.name = page.locator('[data-testid="ContactName"]');
        this.email = page.locator('[data-testid="ContactEmail"]');
        this.personalbutton = page.locator('[href="/#contact"]');
        this.phone = page.locator('[data-testid="ContactPhone"]');
        this.subject = page.locator('[data-testid="ContactSubject"]');
        this.message = page.locator('[data-testid="ContactDescription"]');
        this.submitButton = page.getByRole('button', { name: 'Submit' })
    }

    // Creates a function that fills of the elements needed.
    async fill_in_values(name: string, email: string, phone: string, subject: string, message: string){
        
        await this.email.fill(email);
        await this.name.fill(name);
        await this.phone.fill(phone);
        await this.subject.fill(subject);
        await this.message.fill(message);
    }

    async submit_values(){
        await this.submitButton.click();
    }

    async navigate_to_page(){
        await this.personalbutton.click();
    }
}