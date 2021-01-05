//define express use
const express = require('express');
var app = express();
//allows sets public to the folder that host
app.use(express.static(__dirname + 'public'));
var nunjucks = require('nunjucks');
nunjucks.configure('public/',
	{autoescape: true,
	express: app
});
app.get('/',(req,res) => {
	res.render('home.html');
});

app.listen(process.env.PORT || 3000);

