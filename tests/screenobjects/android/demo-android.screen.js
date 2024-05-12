class DemoScreen {

    get viewStoreScreen() {
        return $("//android.widget.TextView");
    }

    get viewScrollCountry () {
        return $("id=com.androidsample.generalstore:id/spinnerCountry");
    }

    get addCustomerName () {
        return $("id=com.androidsample.generalstore:id/nameField");
    }

    get btnShop () {
        return $("id=com.androidsample.generalstore:id/btnLetsShop");
    }

}
module.exports = new DemoScreen();