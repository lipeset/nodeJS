const app = require("../../config/server");

app.get('/', function(req,res){
    res.render("home/index");
});