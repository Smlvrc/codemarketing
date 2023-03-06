const hamburger = document.querySelector(".hamburger");
const open = document.querySelector(".fa-bars")
const close = document.querySelector(".fa-x")
let navphone = document.querySelector(".nav-phone");


open.addEventListener("click", function () {
     navphone.classList.add('sema')
    close.style.display = 'block';
    open.style.display = 'none';
 
    
})


   
document.addEventListener("click", function (e) {

    if(e.target.classList.contains('fa-x')){
    
        navphone.classList.add('nav-phone')
        document.querySelector(".fa-x").style.display = "none";
        
        navphone.classList.remove('sema')

        close.style.display = 'none';
        open.style.display = 'block';
    }
 
})



