import { test as basetest } from '@playwright/test';
import { DashBoard } from '../Pages/Dashboard';
import * as fs from 'fs';


const jsonDataPath = process.env.JSON_DATA_PATH
if (!jsonDataPath || !fs.existsSync(jsonDataPath)) {
    throw new Error(`JSON data file not found: ${jsonDataPath}`);
}
const testData = JSON.parse(fs.readFileSync(jsonDataPath, 'utf-8'));

export const test = basetest.extend<{
    dashBoard: DashBoard;
    sharedData: any;
    testData: typeof testData;
}>({

    dashBoard: async ({ page }, use) => {
        await use(new DashBoard(page));
    },
    sharedData: [async ({ }, use: (data: any) => Promise<void>) => {
        const data = {}
        await use(data);

    }, { worker: true, auto: true }],
    // testData: [async ({ }, use: (testdata: any) => Promise<void>) => {
    //     const data = testData;
    //     await use(data);

    // }, { worker: true, auto: true }],
    testData: testData

})

export { expect } from '@playwright/test';