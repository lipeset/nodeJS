module.exports.index = function (apply, req, res) {

    var connection = apply.config.dbConnection();
    var noticiasModel = new apply.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltiamsNoticias(function (error, result) {
        res.render("home/index", { noticias: result });
    });
};