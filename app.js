collapse sidebar 
let sideBar = document.querySelector('.sys-sidebar-menu');
collapseSidebar.addEventListener('click', function(){
    sideBar.classList.toggle('sidebar-collapse');
})



function infofunc(e, info) {
    var i, content, links;
    content = document.getElementsByClassName("sys-sub-menu");
    for (i = 0; i < content.length; i++) {
       content[i].style.display = "none";
    }
    links = document.getElementsByClassName(" sysdropDown");
    for (i = 0; i < links.length; i++) {
    }
    document.getElementById(info).style.display = "block";
   
 }

// let syssnackbar = document.getElementsByClassName('sys-snackbar');
let syssnackbarBtn = document.getElementsByClassName('snackbar-close-btn');
for(let i = 0; i < syssnackbarBtn.length; i++){
    syssnackbarBtn[i].addEventListener('click', function(){
        this.parentElement.style.display = "none";
    })
}

let snackbarTime1 = document.querySelectorAll('[time="5"]');
let snackbarTime2 = document.querySelectorAll('[time="2"]');

for(let i = 0; i < snackbarTime1.length; i++){
    setTimeout(()=>{
        if(snackbarTime1[i].style.display === "block"){
            snackbarTime1[i].style.display = "block";
        }else{
            snackbarTime1[i].style.display = "none";
        }
    }, 5000);;
}

for(let i = 0; i < snackbarTime2.length; i++){
    setTimeout(()=>{
        if(snackbarTime2[i].style.display === "block"){
            snackbarTime2[i].style.display = "block";
        }else{
            snackbarTime2[i].style.display = "none";
        }
    }, 2000);;
}