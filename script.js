let circle = document.getElementsByClassName('circle')
var flag = 0;


function change(index ,num) {
    if( circle[index].innerHTML==num){
        return
    }
    console.log('ok');
    let i=0
    setInterval(() => {
        circle[index].innerHTML=i
        
        if (i==num) {
            return
        }
        i++
    }, 16);
}

window.addEventListener('scroll',reval);


function reval() {
    console.log(flag);
    if (flag == 1){
        return
    }
    let awards = document.querySelector('.awards')
    var windowhieght = window.innerHeight;
    var revealtop = awards.getBoundingClientRect().top;
    if(revealtop<windowhieght-100){
        change(0,353);
        change(1,365);
        change(2,188);
        change(3,48);
        flag = 1;
    }
    
}


var menubtn = document.querySelector('.scrollbtn')
menubtn.addEventListener('click',showmenu)
var menu = document.querySelector('.scroll')
function showmenu() {
    menu.classList.toggle('hidden')
}

