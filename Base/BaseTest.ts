import {test as basetest} from '@playwright/test';
import { DashBoard } from '../pages/DashBoard';


export const test = basetest.extend<{
    dashBoard: DashBoard;
    sharedData: any;
}>({

    dashBoard: async ({ page }, use) => {
        await use(new DashBoard(page));
    },
    sharedData: [async ({}, use) => {
        const data = {}
        await use(data);

    },{worker: true,auto:true}]


})

export { expect } from '@playwright/test';