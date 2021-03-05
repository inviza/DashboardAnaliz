const mongoose = require('mongoose');


const projectSchema = mongoose.Schema({
    start : {
        type: Number,
        // required: true
    },
    topic: {
        type: String,
        required: true,
        default: 'Testing'
    },
    customTopic:  {
        type: String,
        required: true
    },
    progress : {
        type: Number,
        // required: true
        default: 0
    },
    deadline: {
        type: Number,
        required: true
    },
}, {
    timestamps : true
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project