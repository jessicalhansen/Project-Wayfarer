require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || '3000';
// const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const citiesRouter = require('./routes/cities');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/users', usersRouter);
app.use('/cities', citiesRouter);
app.use('/posts', postsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});
app.listen(port, () => console.log('connected to port ' + port));
