const DemoIOSScreen = require('../../screenobjects/ios/demo-ios.screen');

describe("Todo List", () => {
  it("Create a Todo List", async () => {
    await DemoIOSScreen.createListBtn.click();
    await DemoIOSScreen.listNameInput.addValue("Things to do today");
    await DemoIOSScreen.createBtn.click();

    await expect(await DemoIOSScreen.listNameField("Things to do today")).toBeExisting();
  });
});