const {Key} = require('testplane');
const dataAll = require('../../dataBase.json');
// const {By, Key, until, Builder, Origin, Browser} = require('selenium-webdriver');
// describe("test", () => {
//     it("example", async ({browser}) => {
//         await browser.url("https://github.com/gemini-testing/testplane");
//
//         await expect(browser.$(".f4.my-3")).toHaveText("Browser test runner based on mocha and wdio");
//     });
// });
// await expect(aboutSection).toHaveText("Browser test runner based on mocha and wdio"); // Библиотека ассертов доступна из коробки
describe/* .skip *//* .only */('Красные сценарии - главная', async function () {
    it/* .skip */('Заказ обратного звонка из шапки', async function ({browser}) {
        await browser.url(dataAll.Callback.url);
        const callbackLink = await browser.$(dataAll.Callback.callBackLink); // Ищем ссылку на странице
        await callbackLink.click();// клик по ссылке

        const modalCallbackWindow = await browser.$(dataAll.Callback.modalCallback); // Ищем открывшееся окно
        await modalCallbackWindow.assertView('plainViewModal'); // С помощью скриншота проверяем вёрстку
        // const phoneInput = await browser.$(dataAll.Callback.inputPhone)//ищем инпут
        //     .click()// клик по инпуту
        //     .elementSendKeys(dataAll.Callback.wrongPhone + Key.Enter);//вводим неполный телефон в инпут + Enter
        // await browser.$(dataAll.Callback.inputPhoneError)//ищем ошибку ввода телефона
        //     .assertView('plainViewModalInputError'); // С помощью скриншота проверяем вёрстку
        // await phoneInput//ищем инпут
        //     .click()// клик по инпуту
        //     .elementSendKeys(dataAll.Callback.rightPhone + Key.Enter);//вводим верный телефон в инпут + Enter
        // await browser.$(dataAll.Callback.successModal)//ищем окно успеха
        //     .assertView('plainViewModalSuccess'); // С помощью скриншота проверяем вёрстку
    })
});