// const GoogleStrategy = require('passport-google-oauth2').Strategy;
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth2';
import * as dotenv from 'dotenv';

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
import GOOGLE_CLIENT_ID from 'dotenv';
import GOOGLE_CLIENT_SECRET from 'dotenv';
// export const google = () => {
// 	passport.use(
// 		new GoogleStrategy.Strategy(
// 			{
// 				clientID: process.env.GOOGLE_CLIENT_ID,
// 				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 				callbackURL: 'http://localhost:5173/',
// 				passReqToCallback: true,
// 			},
// 			function (request, accessToken, refreshToken, profile, done) {
// 				return done(null, profile);
// 			}
// 		)
// 	);

// 	passport.serializeUser(function (user, done) {
// 		done(null, user);
// 	});

// 	passport.deserializeUser(function (user, done) {
// 		done(null, user);
// 	});
// };
passport.use(
	new GoogleStrategy.Strategy(
		{
			clientID:
				'852099446055-t3g0c3heqp03d7nnsi1m9sdin38jvmq3.apps.googleusercontent.com',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: 'http://localhost:5173/',
			passReqToCallback: true,
		},
		function (request, accessToken, refreshToken, profile, done) {
			return done(null, profile);
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});
