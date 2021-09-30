class HomePage {
  get #formButton() {
    return $('~Forms');
  }

  async goToForms() {
    await this.#formButton.click();
  }
}

module.exports = new HomePage();
