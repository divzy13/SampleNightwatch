module.exports = {
    '@tags' : ['Demo'],
    'Selenium Demo page' : function(client) {
        client
        .url('https://www.seleniumeasy.com/test/')
        .waitForElementVisible('body' ,1000)
        .windowMaximize()
        .assert.title('Selenium Easy - Best Demo website to practice Selenium Webdriver Online')
        .waitForElementVisible('a[href$=test]', 5000)
        .click('a[href$=test]')
        .pause(5000)
        .end()
    }
}

