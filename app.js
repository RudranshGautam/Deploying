const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const app = express();

// Log all requests to access.log
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

// Error logging middleware
app.use((err, req, res, next) => {
  fs.appendFile('error.log', `${new Date()} - ${err.message}\n`, (error) => {
    if (error) console.log('Failed to write error log');
  });
  res.status(500).send('Something broke!');
});

// Other routes and middleware...

app.listen(3000);
