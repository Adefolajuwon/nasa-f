const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(
	new GoogleStrategy(
		{
			clientID:
				'852099446055-sclc2dl37q3ksa1hlgib6ta0lrfrrd8i.apps.googleusercontent.com',
			clientSecret: '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',
			callbackURL: '/api/auth/google/callback',
			scope: ['profile', 'email'],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
