class FormsPage {
  get #inputField() {
    return $('~text-input');
  }

  get #inputResult() {
    return $('//android.widget.TextView[@content-desc="input-text-result"]');
  }

  get #dropdown() {
    return $('~Dropdown');
  }

  get #getDropdownItem() {
    return $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[4]'
    );
  }

  get #dropdownItems() {
    return $('android.widget.CheckedTextView');
  }

  async typeText(text) {
    await this.#inputField.setValue(text);
  }

  async getTypedResult() {
    return await this.#inputResult.getText();
  }

  async selectDropdownItem() {
    await this.#dropdown.click();
    return await this.#getDropdownItem.getText();
  }

  async dropdownItems() {
    return await this.#dropdownItems;
  }
}

module.exports = new FormsPage();
