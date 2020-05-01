var express = require('express')
var app = express()
var port = 3000
var pug = require('pug')
var db = require('./Database/db.js')

var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var authRouter = require('./Routers/auth.router.js')
var statisticalRouter = require('./Routers/statistical.router')
var predictRouter = require('./Routers/predict.router.js')

var authMidderware = require('./Midderwares/auth.midderware')

app.use(cookieParser())

app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.render('index')
});

app.use('/auth', authRouter)
app.use('/statistical', authMidderware.authLogin, statisticalRouter)
app.use('/predict', authMidderware.authLogin, predictRouter)

app.use(express.static('Public'))

app.listen(port, () => {
    console.log('This server is starting at ', port);
});



