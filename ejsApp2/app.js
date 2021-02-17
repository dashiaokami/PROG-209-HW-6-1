var express = require('express');
var path = require('path');

//leaving in the bodyParser in case we ever send up form data and need to get data out of form
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// just one "site" with 2 pages, / and about

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/movies', function(req, res) {
    let movie1 = "Spirited Away";
    let movie2 = "Parasite";
    let movie3 = "Pursuit of Happiness";
    let movie4 = "Kiki's Delivery Service";
    res.render('pages/movies', {
        value3PassedToRenderPage : movie1,
        value4PassedToRenderPage : movie2,
        value5PassedToRenderPage: movie3,
        value6PassedToRenderPage: movie4
    });
});

//tv shows page
app.get('/tvshows', function(req, res) {
    let tvshow1 = "The Walking Dead";
    let tvshow2 = "Empire";
    let tvshow3 = "Martin";
    let tvshow4 = "One on One";
    res.render('pages/tvshows', {
        value7PassedToRenderPage : tvshow1,
        value8PassedToRenderPage : tvshow2,
        value9PassedToRenderPage : tvshow3,
        value10PassedToRenderPage: tvshow4
    });
});


// upLoadData page 
// sending a get with 1 param
// http://localhost:3000/uploadData?id=2
app.get('/uploadData', function(req, res) {
    let idVar = req.param('id');
    let msgVar = req.param('msg');
    // passing an object, used like a dictionary, to the render code
    res.render('pages/uploadData', { 
        value1PassedToRenderPage: idVar,
        value2PassedToRenderPage: msgVar
     });
  });



// error page 
app.get('/error', function(req, res) {
    // should get real data from some real operation, but instead ...
    let message = "some text from someplace";
    let errorObject ={
        status: "this is real bad",
        stack: "somebody called #$% somebody who called somebody <awful>"
    };
    res.render('pages/error', {  // pass the data to the page renderer
        message: message,
        error: errorObject
    });
});



app.listen(3000);  // not setting port number in www.bin, simple to do here
console.log('3000 is the magic port');

module.exports = app;
