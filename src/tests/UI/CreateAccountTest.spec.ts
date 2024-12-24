import Home from "application-context/helper-methods/Home";
import Registration from "application-context/helper-methods/Registration";
import { test } from "@base-test";
import Allure from "@allure";
import ExcelUtil from "@utils/ExcelUtil";

const sheet = "CreateAccountTest";
const testData = ExcelUtil.getTestDataArray(sheet);
// eslint-disable-next-line no-restricted-syntax
for (const data of testData) {
    test(`${data.TestID} - ${data.Description}`, async ({ page }) => {
        Allure.attachDetails(data.Description, data.Issue);
        const home = new Home(page);
        await home.launchApplication();
        await home.navigateToCreateAccount();
        const register = new Registration(page);
        const userName = await register.createAccount(data.Email, data.Password,
            data.ConfirmPassword, data.FirstName, data.LastName, data.PhoneNumber, data.Country,
            data.City, data.Address, data.State, data.PostalCode, data.AllowOffersPromotion);
        await register.saveRegistration();
        await home.validateLogin(userName);
        await home.logout();
    });
}
