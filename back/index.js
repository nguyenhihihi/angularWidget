const express = require('express');
const jsonfile = require('jsonfile');
const bodyParser = require('body-parser').json();
const fileURL = './data.json';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});


app.get('/', (req, res) => {
	var data = [];
	jsonfile.readFile(fileURL, function(err,obj){
		if (obj === undefined)
		{
			res.send(data);
		}
		else 
		{
			res.send(obj);
		}
	});
	
});

app.post('/', bodyParser,(req, res) => {	
	var data = req.body;
	jsonfile.writeFile(fileURL, data, function(err){
		console.log(err);
	});

	res.send("ok");
});

app.listen(3000, () => console.log(`Server's using port 3000`));