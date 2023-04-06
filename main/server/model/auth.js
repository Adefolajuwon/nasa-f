const userSchema = require('../schema/user.schema');
const asyncHandler = require('express-async-handler');

const checkUserExists = asyncHandler(async (user) => {
	// check if user already exists

	let exists = await userSchema.findOne({
		id: user.id,
		provider: user.provider,
	});
	if (exists) {
		// User already exists and is trying to login
		// Add a key to tell that the user has an account
		return { exists: true };
	}
	return { exists: false };
});
const insertUser = asyncHandler(async (user) => {
	// check if user already exists

	console.log(user);

	let exists = await userSchema.findOne({
		id: user.id,
		provider: user.provider,
	});
	if (exists) {
		// Update user
		await userSchema.updateOne({ id: user.id, provider: user.provider }, user);
		return { success: true };
	}
	await userSchema.create(user);
	return { success: true };
});

module.exports = { insertUser, checkUserExists };
