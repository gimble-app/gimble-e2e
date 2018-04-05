module.exports = {
  'A wild Gimble appeared!' : (browser) => {
    browser
      .url('https://gimble-app.firebaseapp.com')
      .waitForElementVisible('body', 1000)
      .expect.element('#root').to.be.present;
    browser.end();
  }
};
