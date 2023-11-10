const mongoose = require('mongoose')

const issue_schema = new mongoose.Schema({
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
    projects:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project'
        }
        ]

},{
    timestamps:true
})

const Issues = mongoose.model('Issues',issue_schema);

module.exports = Issues