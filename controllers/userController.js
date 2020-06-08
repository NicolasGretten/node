const account = require('./account/lib.js');

module.exports = function(app) {
    app.post('/login', account.login);
    app.get('/all', account.all);
    app.post('/signup', account.signup);
}