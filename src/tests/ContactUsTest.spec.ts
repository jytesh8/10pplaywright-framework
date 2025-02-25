import ExcelUtil from "@utils/ExcelUtil";
import { test } from "@base-test";
import Allure from "@allure";
import Home from "application-context/helper-methods/Home";

const testData = ExcelUtil.getTestDataArray("ContactUsTest");
for (const data of testData) {
    test(`${data.TestID} : ${data.Description}`, async ({ page }) => {
        Allure.attachDetails(data.Description, data.Issue);
        const home = new Home(page);
        await home.launchApplication();
        await home.enterContactUsDetails(data.Category, data.Product, data.Email, data.Subject);
        await home.sendMessage();
        await home.verifySuccessMessage(data.Message);
    });
}
