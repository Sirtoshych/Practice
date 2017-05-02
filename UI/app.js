/**
 * Created by Sirtoshych on 3/28/2017.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('Public'));
app.use(bodyParser.json());

var db = require('diskdb');
db = db.connect('Private', ['articles']);
app.get ('/articles', function(req, res){
    res.json(db.articles.find());
});
app.get('/article/:id', function(req,res){
    var article  = db.articles.findOne({id: req.params.id});
    res.json(article);
});
app.put('/addarticle', function (req,res) {
    db.articles.save(req.body);
    res.send(req.body);

});
app.get('/delete/:id', function (req,res) {
    var id = req.params.id;
    var article = db.articles.findOne({id: req.params.id});
    db.deletedArticles.save(article);
    db.articles.remove({id: id});
    res.send(req.body);
});
app.put('/articleEdit/', function (req, res) {
    var index = req.body.Id;
    var query = db.articles.findOne({Id: index.toString()});

    var options = {
        multi: false,
        upsert: true
    };
    var update = db.articles.update(query, req.body, options);
    console.log(db.articles.findOne({Id: index.toString()}));
    res.json(req.body);
});
app.listen(3000, function () {

    console.log('App listening on port 3000!');

});


