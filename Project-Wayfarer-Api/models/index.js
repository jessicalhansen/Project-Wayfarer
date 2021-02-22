const mongoose = require('mongoose');

const connectionString =
	process.env.MONGODB_URI ||
	'mongodb+srv://mohamedabdullah92:8723050822@cluster0.nrkbb.mongodb.net/wayfarer?authSource=admin&replicaSet=atlas-36dpyk-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

mongoose
	.connect(connectionString, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB connected successfully'))
	.catch((err) => console.log(err));

module.exports = {
	City: require('./City'),
	Post: require('./Post'),
};
