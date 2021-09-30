const HomePage = require('../pageobjects/home.page');
const FormsPage = require('../pageobjects/forms.page');

describe('Forms', () => {
  it('should fill in a form', async () => {
    await HomePage.goToForms();
    await FormsPage.typeText('Hello');
    expect(await FormsPage.getTypedResult()).toEqual('Hello');
    expect(await FormsPage.selectDropdownItem()).toEqual('This app is awesome');
    expect(await FormsPage.dropdownItems()).toHaveText([
      'webdriver.io is awesome',
      'Appium is awesome',
      'This app is awesome',
    ]);
  });
});
