const Issues = require('../models/issue_fields')
const project_Issues = require('../models/project_issues')

module.exports.home =async function(req,res){
    try{
        const issues = await Issues.find({})
        return res.render('home',{title:"home",issues:issues})
    }
    catch(err){
    }
}

module.exports.create=async function(req,res){
        Issues.create({
        title:req.body.title,
        description:req.body.description,
        author:req.body.author
    })
    return res.redirect('/')
}

module.exports.delete=async function(req,res){
    try{
        let issue = await Issues.findByIdAndDelete(req.params.id)
        issue.deleteOne();
        await project_Issues.deleteMany({project_bug:req.params.id})
        return res.redirect('back')
    }
    catch(err){
        console.log(err)
        return
    }
}