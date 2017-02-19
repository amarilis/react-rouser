require('babel-register');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var fs = require('fs');
var path = require('path');

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
// Настройка view
// Использование шаблонизаторов
app.set('views', path.join(__dirname, 'templates'));  // папка для шаблонов
app.set('view engine', 'jade');  // подключение шаблонизатора jade

app.locals.pretty = true;
//app.use(express.favicon()); // читает url /favicon.ico - если есть, то передает, а иначе идет дальше

//app.use(express.logger('dev')); // выводит запись, что пришел запрос; dev - формат логирования
app.use(logger('dev'));
// считывает данные, которые присланы методом POST, например из формы, данные которые присланы JSON
// т.е. разбирает тело запроса
// данные доступны в req.body.свойство
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// парсит куки
// req.headers разбирает и выводит req.coockies
// 'your secret here' - не обязательный ключ, которыми куки будут подписываться
// app.use(express.cookieParser('your secret here'));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));


// позволяет нам говорить какие запросы как будут обработаны
// например
/*
 app.get('/', function (req, res, next) {
 res.end('Test');
 })
 */
app.use('/', routes);
//app.use('/users', users);

app.get('/articles', function(req, res) {
    fs.readFile(COMMENTS_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
