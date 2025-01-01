import Allure from "@allure";
import ExcelUtil from "@utils/ExcelUtil";
import { test } from "@base-test";
import Database from "database-helper/helper-methods/Database";

const testData = ExcelUtil.getTestDataArray("DatabaseTest");
for (const data of testData) {
    test(`${data.TestID} - ${data.Description}`, async ({ }) => {
        Allure.attachDetails(data.Description, data.Issue);
        const db = new Database();
        const result = await db.executeMSSQLQuery(data.Query);
        await db.verifyExecutionSuccess(result.rowsAffected[0]);
    });
}
