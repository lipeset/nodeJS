module.exports = function (apply) {    
    apply.get('/noticia', function (req, res) {

        var connection = apply.config.dbConnection();
        var noticiaModel = new apply.app.models.NoticiasDAO(connection);

        noticiaModel.getNoticia(function (error, result) {
            res.render("noticias/noticia", {noticia : result});
        });
    });
};