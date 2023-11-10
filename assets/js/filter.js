const project_issue_btn = document.getElementById('project-issue-btn');
const filter_modal = document.getElementById('filter-modal');
const close_modal = document.getElementById('close-btn');
const filter_name_btn = document.getElementById('filter-name-btn');
const filter_name = document.getElementById('filter-name');
const filter_name_close = document.getElementById('close-btn-name');
const filter_team = document.getElementById('filter-team');
const filter_team_close = document.getElementById('close-btn-team');
const filter_team_btn = document.getElementById('filter-team-btn');


project_issue_btn.addEventListener('click',function(){
    filter_modal.style.display="block";
})

close_modal.addEventListener('click',function(){
    filter_modal.style.display="none";
})

filter_name_btn.addEventListener('click',function(){
    filter_name.style.display="block";
})
filter_name_close.addEventListener('click',function(){
    filter_name.style.display="none";
})

filter_team_btn.addEventListener('click',function(){
    filter_team.style.display="block"
})
filter_team_close.addEventListener('click',function(){
    filter_team.style.display="none"
})