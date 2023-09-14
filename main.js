let submit = document.querySelector('.one');
let two = document.querySelector('.two');
let email = document.querySelector('.email');
let para = document.querySelector('.p-error');
let success = document.querySelector('.success');
let container = document.querySelector('.container');
let form = document.querySelector('form');
let your = document.querySelector('.your');

console.log(submit);

submit.addEventListener('click',function(e){
    e.preventDefault();
    let value = email.value;
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig;
    if(reg.test(value)){
        success.classList.remove('hide');
        container.classList.add('hide');
        your.innerHTML = email.value;
    }
    else{
        email.classList.add('error');
        para.classList.add('open2')
    }
    console.log(reg.test(value));
    console.log(email.value)
});

two.addEventListener('click',function(){
    success.classList.add('hide');
    container.classList.remove('hide');  
    email.classList.remove('error');
    para.classList.remove('open2');
    form.reset();
})