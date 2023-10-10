let button = document.getElementById("button");
window.onscroll = function(){
    scroll();
}
function scroll(){
    if(document.documentElement.scrollTop>20){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
}
function goUp(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}