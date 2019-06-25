module.exports = {
    'Demo Google page' : function(client) {
        client
        .url("http://google.co")
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]' , 'Nightwatch')
        //.click('input[type=text]')
        .waitForElementVisible('input[name=btnK]', 2000)
        .click('input[name=btnK]')
        .pause(4000)
        .end() 
    }
}