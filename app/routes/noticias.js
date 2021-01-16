const app = require("../../config/server");

app.get('/noticia', function(req,res){
    res.render("noticias/noticias");
});