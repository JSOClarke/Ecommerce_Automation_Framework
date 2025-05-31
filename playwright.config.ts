import { defineConfig} from '@playwright/test'
// This calls a export from the playwright libary that is present in the node module when we did npm stuff at the start.

export default defineConfig({

    testDir: './tests',
    timeout: 30000,
    use: {
        baseURL: 'https://bookcart.azurewebsites.net/',
        headless:true
    }

});