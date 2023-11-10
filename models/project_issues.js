const mongoose = require('mongoose');

const project_issues = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    project_bug:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Issues'
    },
    lables:[
        {
            type:String,
            required:true,
            trim:true
        }
    ]
},{
    timestamps:true
})

const Project = mongoose.model('Project',project_issues);

module.exports = Project    