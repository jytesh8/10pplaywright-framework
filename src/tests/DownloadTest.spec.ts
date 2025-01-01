import Configuration from "application-context/helper-methods/Configuration";
import Home from "application-context/helper-methods/Home";
import { test } from "@base-test";
import Allure from "@allure";

test(`DownloadTest - To download pdf file from application`, async ({ page }) => {
    Allure.attachDetails("To download pdf file from application", null);
    const home = new Home(page);
    await home.launchApplication();
    const newPage = await home.navigateToManagementConsole();
    await page.close();
    const configStep = new Configuration(newPage);
    const fileName = await configStep.downloadAOSBackendPDF();
    await configStep.verifyPDFFilePageCount(fileName, 4);
    await configStep.verifyPDFFileText(fileName, "Advantage Online Shopping (AOS)");
});
