// import { test, expect } from '@playwright/test';
import { test, expect } from '../src/Base/BaseTest';
let ENV = process.env;




test('env test', { tag: '@smoke' }, async ({ page, context, dashBoard, testData }) => {
    console.log("Environment: ", ENV.BASE_URL);
    console.log("Test Data: ", testData.users[0].username);
});
