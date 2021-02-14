module.exports.noticias = function (apply, req, res) {
    var connection = apply.config.dbConnection();
    var noticiasModel = new apply.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function (error, result) {
        res.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = function (apply, req, res) {
    var connection = apply.config.dbConnection();
    var noticiaModel = new apply.app.models.NoticiasDAO(connection);

    noticiaModel.getNoticia(function (error, result) {
        res.render("noticias/noticia", { noticia: result });
    });
}