const project_Issues = require('../models/project_issues')
const Issues = require('../models/issue_fields');

module.exports.create_issue =  function(req,res){
    Issues.findById(req.body.project_bug)
    .then((project)=>{
        project_Issues.create({
            title:req.body.title,
            description:req.body.description,
            author:req.body.author,
            project_bug:req.body.project_bug,
            lables:req.body.lables
        })
        .then((issue)=>{
            project.projects.push(issue)
            project.save();
            res.redirect('back')
        }).catch((err)=>{
            console.log(err)
        })
    })
}

module.exports.delete = async function(req,res){
    try{
        const project_issue = await project_Issues.findById(req.params.id)
        project_issue.deleteOne();
        return res.redirect('back');
    }
    catch(err){
        console.log(err)
    }
}

module.exports.fields=  async function(req,res){
    const issues_current_id = await Issues.findById(req.params.id);
    const projects = await project_Issues.find({});
    await Issues.findById(req.params.id).populate('projects').exec().then((data)=>{
        return res.render('fields',{title:"Fields",issues:data, issues_current_id,projects:projects})
    })
}

module.exports.filter_team = async function(req,res){
    const projects = await project_Issues.find({})
    const operations = req.body.operations
    const Frontend = req.body.Frontend
    const Backend = req.body.Backend
    return res.render('filter_team',{title:"filter-team",projects:projects,operations:operations,Frontend:Frontend,Backend:Backend})
}

module.exports.filter_name = async function(req,res){
    const project_issue_name = await project_Issues.find({});
    const name_filter = req.body.author;
    return res.render('filter_name',{title:"Filter-name",projects:project_issue_name,author:name_filter})
}

