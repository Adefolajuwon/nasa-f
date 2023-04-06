// import mongoose from 'mongoose';
// import * as dotenv from 'dotenv';

const mongoose = require('mongoose');
const connectDB = () => {
	mongoose.set('strictQuery', true);
	mongoose
		.connect(
			'mongodb+srv://juwon:tremothegoat@cluster0.lary7db.mongodb.net/?retryWrites=true&w=majority'
		)
		.then(() => console.log('connected to mongo'))
		.catch((err) => {
			console.error('failed to connect with mongo');
			console.error(err);
		});
};
module.exports = connectDB;
