const { expect } = require("chai");
const login = require("../pageobjects/login");

describe('Nomo App Demo Tests', () => {
    it('Login Scenario Test Cases', async () => {

        await login.menu.click();

        await login.loginMenu.click();

        await driver.pause(1000);

        await login.userName.addValue('alice@example.com');

        await login.passWord.addValue('10203040');

        await login.loginBtn.click();

        await driver.pause(1000);

        await login.userName.clearValue();

        await login.passWord.clearValue();

        await login.loginBtn.click();

        await driver.pause(1000);

        await login.userName.addValue('1@2.com');

        await login.passWord.addValue('f-o-o');

        await login.loginBtn.click();

        await driver.pause(1000);

        await login.userName.clearValue();

        await login.passWord.clearValue();

        await login.userName.addValue('bob@example.com');

        await login.loginBtn.click();

        await driver.pause(1000);

        await login.userName.clearValue();

        await login.passWord.clearValue();

        await driver.pause(1000);

        await login.userName.addValue('bob@example.com');

        await login.passWord.addValue('10203040');

        await login.loginBtn.click();

        await driver.pause(1000);

        await driver.pause(1000);
    })
})