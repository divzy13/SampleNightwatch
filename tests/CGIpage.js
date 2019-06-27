module.exports = {
    'CGI Web page' : function(client) {
        client
        .url('https://www.cgi.com/en')
        .waitForElementVisible('a:contains(Services)', 1000)
        .end()
    }
}