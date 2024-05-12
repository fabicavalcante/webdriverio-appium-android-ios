const DemoScreen = require("../../screenobjects/android/demo-android.screen")

describe('Android - General Store', () => {
  it('should displays product screen', async () => {
      await expect(DemoScreen.viewStoreScreen).toHaveText("General Store");
      await DemoScreen.addCustomerName.addValue('John John');
  })

  it('should displays cart screen', async () => {
      await DemoScreen.btnShop.click();
  })
})