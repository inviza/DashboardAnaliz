const mongoose = require('mongoose');
// 127.0.0.1:27017

mongoose.connect(process.env.MONGODB_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true
})