// API testing on a completly different application

import { test, expect, Page, request} from "playwright/test";

async function statusCodeChecker(status: string, page:Page) {
    
}

test('Verifiy the happy path of a get request from swagger dogs, @Functinoal_API', async ({page}) => {

    // you have the basically start up the api_client for this. 

    //This is boilerplate but you able to give other parameters if needed for the new context stuff.
    const apiContext = await request.newContext({baseURL: 'https://airportgap.com/api'});

    //Send the APi request

    const response = await apiContext.get('/airports')

    // assert whether we get the expected response from the get request.
    const stringTest = 'bigger'
    const responseBody = await response.json();
    console.log('Response Status:', response.status());
    console.log(`Resonse Body: ${responseBody}`);
    console.log('Response Header: ', response.headers());

})