'use strict';
var express = require('express');
var cors = require('cors');
var multer = require('multer');
var uploads = multer({ dest: 'uploads/' })
var app = express();


app.post('/api/fileanalyse', uploads.single("upfile"), function (req, res) {
    return res.json({ filename: req.file.originalname, size: req.file.size });
})

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function (req, res) {
    res.json({ greetings: "Hello client" });
});

app.listen(process.env.PORT || 3000, function () {
    console.log('node is listening ...');
});
