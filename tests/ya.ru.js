describe('Ya', function() {

  /* @see https://nightwatchjs.org/api/ */
  /* https://learn.javascript.ru */
  test('demo test', function(browser) {
    browser
    .url('https://ya.ru')
    .setValue('#text', ['nightwatch'])
    .click('button[type=submit]')
    .assert.containsText('.main__center', 'Nightwatch.js')
    .end();
  });

});
