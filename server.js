var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 8080;
var app = express();
var db = require("./models");
var exphbs = require("express-handlebars");
app.use(express.static(__dirname + "/public"));
var routes = require("./controllers/burgers_controller.js");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/", routes);
db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log("App listening on PORT " + PORT);
	});
});