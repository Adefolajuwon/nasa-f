//
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const authRoute = require('./routes/auth');
const cookieSession = require('cookie-session');
const passportStrategy = require('./passport');
const app = express();
const connectDB = require('./model/connect.js');
const session = require('express-session');
const path = require('path');

// app.use(
// 	cookieSession({
// 		name: 'session',
// 		keys: ['cyberwolve'],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );
app.use(
	session({
		secret: 'somethingsecretgoeshere',
		resave: true,
		saveUninitialized: true,
		cookie: { secure: true },
	})
);
app.use(passport.initialize());
app.use(passport.session());

// app.use(express.static(path.join(__dirname, './frontend/build')));

app.get('*', function (_, res) {
	res.sendFile(
		path.join(__dirname, './client/build/index.html'),
		function (err) {
			if (err) {
				res.status(500).send(err);
			}
		}
	);
});
app.use('/*', express.static(path.join(__dirname, 'public', 'index.html')));

app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: 'GET,POST,PUT,DELETE',
		credentials: true,
	})
);

app.use('/api/auth', authRoute);
const PORT = process.env.PORT || 8000;

const startServer = async () => {
	try {
		connectDB();
		app.listen(PORT, () => console.log('Server started on port '));
	} catch (error) {
		console.log(error);
	}
};

startServer();
