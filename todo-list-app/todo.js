document.addEventListener("DOMContentLoaded", () => {
const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
let addbtn = document.querySelector(".addbtn");
addbtn.addEventListener("click",addtask);
function addtask(){
    if (inputBox.value ===''){
        alert("you have to write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listcontainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();
});