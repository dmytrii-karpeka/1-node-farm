const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middleware
// Morgan used for displaying requests and corresponding paths, when request hits server
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from middleware💫');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Mounting of routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// Server started
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});