module.exports = {
    'CGI Web page' : function(client) {
        client
        .url('https://www.cgi.com/en')
        .waitForElementVisible('a[class=is-active]', 1000)
        .click('a[class=is-active]')
        .pause(5000)
        .end()
    }
}