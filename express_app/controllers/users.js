module.exports.controller = (app) => {
    // Get users page
    app.get('/users', (req, res) => {
        res.render('index', { title: 'Users'});
    });
};