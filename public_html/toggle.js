
function myF(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('dark-mode','enabled')
    }
    else{
        localStorage.setItem('dark-mode','disabled')
    }
};

if(localStorage.getItem('dark-mode')=='enabled'){
    document.body.classList.toggle("dark-mode");
}