var express = require('express'),
	sys = require('sys'),
	fs = require('fs');

var app = express.createServer();

app.configure(function(){
	app.use(express.logger({ format: ':method :url' }));
	app.set('view engine', 'jade');
    app.use(express.staticProvider(__dirname + '/public'));
});

/* Homepage */
app.get('/', function(req, res) {
	res.render('index');
});

/* Form to create problem */
app.get('/problem', function(req, res) {
    // TODO create object here
    res.render('problem/new');
});

/* Get a specific problem */
app.get('/problem/:id', function(req, res) {
    // TODO get object here
    res.render('problem/show', {
        locals: {
            problem: { name: 'Problem 1' }
        }
    });
});

/* This is where the problem is actually created */
app.post('/problem', function(req, res){
    var id = 1;
    res.redirect('/problem/'+id);
});

/* Get a specific problem */
app.get('/task', function(req, res) {
    // TODO get object here
    res.render('task/show', {
        locals: {
            problem: { id: 1, name: 'Problem 1' },
            algorithm: {
                map_function: "function(key, val) { anansi.emit('intermediate', key, val); }",
                reduce_function: "function(key, val) { anansi.emit('output', key, val); }"
            },
            data: { key: "key", value: "value", type: "input" }
        }
    });
});

// Listen on 80? Really?
app.listen(80);