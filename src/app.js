const express = require('express');
const app = express();
const APiRoutes = require('./routes/api');

// ADDING MIDDLEWARES TO APP
app.use(express.json());

// ALL API REQUEST COMES HERE
app.use('/api', APiRoutes);

// '/' REQUEST COMES HERE
app.use('/', (req, res) => {
    res.json({
        msg: "Server Running...",
        data: null
    });
});

// HANDLING ERRORS
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        msg: error.message,
        data: null
    });
});

module.exports = app;