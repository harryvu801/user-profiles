const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./config.js')
const corsOptions = {
	origin: 'http://localhost:3000'
};
const profileCtrl = require('./controllers/profileCtrl.js')
const userCtrl = require('./controllers/userCtrl.js')

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
	resave: true,
  saveUninitialized: true,
  secret: config.sessionSecret,
}));


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles)


app.listen(3000, ()=>{console.log('listening');})
