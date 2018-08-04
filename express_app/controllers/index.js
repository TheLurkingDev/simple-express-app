module.exports.controller = (app) => {
    // Get home page
    app.get('/', (req, res) => {
        res.render('index', { title: 'Express' });
    });
};