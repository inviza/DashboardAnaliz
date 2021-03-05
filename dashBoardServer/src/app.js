const express = require('express');
require('./db/mongoose');

const projectRouter = require('./routers/project')

const app = express();
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', '*');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.json());
app.use(projectRouter)

module.exports = app