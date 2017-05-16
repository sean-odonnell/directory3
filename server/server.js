var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var instantMongoCrud = require('express-mongo-crud');
var PORT = 3000;
 
mongoose.connect('localhost:27017/mongocrud');
 
app.use(bodyParser.json()); // add body parser (required)
var options = { //specify options
    host: `localhost:${PORT}`
}
app.use(instantMongoCrud(options)); // INCLUDE OUR MIDDLEWARE

router.get('/myapi', function(req, res){
    res.send('works well');
});

app.use(router);
 
app.listen(PORT, ()=>{
    console.log('started at '+PORT);
})