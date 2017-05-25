/**
 * Created by Sirtoshych on 3/28/2017.
 */
var path = require('path');
//var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var mongoose = require('mongoose');
const SessionFS = require('session-file-store')(session);



const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy





var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('Public'));
app.use(bodyParser.json());
app.use(
    session({
        secret: 'Stay alive',
        saveUninitialized: true,
        resave: false,
        store: new SessionFS(),
    }));

app.use(passport.initialize());
app.use(passport.session());

//  ========== PASSPORT ==========  //

//  Serialize user  //
passport.serializeUser((user, done) => done(null, user));

//  Deserialize user  //
passport.deserializeUser((user, done) => {
    const err = user ? null : new Error('deserialize');
    done(err, user);
});

//  Passport for authorization  //
passport.use('logIn',
    new LocalStrategy(
        { passReqToCallback: true },
        (req, username, password, done) => {
            users.findOne({ username }, (error, user) => {
                if (error) {
                    return done(null, false, { message: error });
                } else if (!user) {
                    return done(null, false, {
                        message: 'We cant find this user in database.',
                    });
                } else if (password !== user.password) {
                    return done(null, false, {
                        message: 'User was found, but password is wrong.',
                    });
                }
                return done(null, user, { message: 'You were successfully authorized.' });
            });
        }));

//  For log in  //
app.post('/logIn', passport.authenticate('logIn'), (req, res) => res.send(req.user));

//  For log out  //
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/');
    });
});


//  For getting current user  //
app.get('/currentUser', (req, res) => {
    const pass = req.session.passport;
    if (pass) {
        res.json({
            username: pass.user.username,
        });
    } else {
        res.json(false);
    }
});



var db = require('diskdb');
db = db.connect('Private', ['articles','deletedArticles','users']);
app.get ('/articles', function(req, res){
    let articles  = db.articles.find();
    res.json(articles);
});
app.get('/article/:id', function(req,res){

        let article  = db.articles.findOne({id: req.params.id});
        res.json(article);


});
app.post('/addarticle', function (req,res) {
    db.articles.save(req.body);
    res.json();

});
app.delete('/delete/:id', function (req,res) {

    var id = req.params.id;
    var article = db.articles.findOne({id: id, });
    db.articles.remove({id: id});
    db.deletedArticles.save(article);
    res.json();

});
app.patch('/articleEdit/', function (req, res) {
    var index = req.body.id;
    var query = db.articles.findOne({id: index  });
    console.log(index);
    var options = {
        multi: false,
        upsert: false,
    };
    var update = db.articles.update(query, req.body, options);

    res.json(req.body);
});
app.listen(3000, function () {

    console.log('App listening on port 3000!');

});


