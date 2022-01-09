// NavBar
const menubtn = document.querySelector('.menu-btn');
let menuOpen = false;
function toggleMenu(){
    if(!menuOpen){
        menubtn.classList.add('open');
        menuOpen=true;
    }else{
        menubtn.classList.remove('open');
        menuOpen=false;
    }
}

const  scrollToArea =  (id) => {
    let view = document.getElementById(id);
    view.scrollIntoView({
        behavior: 'smooth'
    });
    toggleMenu();
}

