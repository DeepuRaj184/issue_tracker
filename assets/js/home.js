const modal = document.getElementById('modal');
const close_btn = document.getElementById('close');
const create_btn = document.getElementById('issue');

create_btn.addEventListener('click',function(){
    modal.style.display="block";
    document.body.style.opacity="5px"
})
close_btn.addEventListener('click',function(){
    modal.style.display="none";
    document.body.style.backgroundColor="white"
})
