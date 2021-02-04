const noticiasModel = require("../models/noticiasModel");

module.exports = function (apply) {    
    apply.get('/noticia', function (req, res) {

        var connection = apply.config.dbConnection();
        var noticiaModel = apply.app.models.noticiasModel;

        noticiaModel.getNoticia(connection, function (error, result) {
            res.render("noticias/noticia", {noticia : result});
        });
    });
};