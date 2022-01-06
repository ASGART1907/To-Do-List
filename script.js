const ul = document.querySelector("ul");
const input = document.querySelector("input");

document.addEventListener("DOMContentLoaded",getValues);
input.addEventListener("keyup",(e) => {
if(e.key === "Enter"){
if(input.value === "") return;

getValue(input.value);
input.value = "";
}
})

function getValue(value){
const li = document.createElement("li");
li.classList.add("list");

const p = document.createElement("p");
p.innerHTML = value;

saveLocalStorage(value);

const icon = document.createElement("i");
icon.classList.add("fa","fa-trash-alt");

icon.addEventListener("click",deleteList);

li.appendChild(p);
li.appendChild(icon);
ul.appendChild(li);

}


let values;
function saveLocalStorage(todo){
if(localStorage.getItem("values") === null){
    values = [];
}else{
    values = JSON.parse(localStorage.getItem("values"));
}
values.push(todo);
localStorage.setItem("values",JSON.stringify(values));
}

function getValues(){
if(localStorage.getItem("values") === null){
    values = [];
}else{
    values = JSON.parse(localStorage.getItem("values"));
}

values.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("list");

    const p = document.createElement("p");
    p.innerHTML = item;

    const icon = document.createElement("i");
    icon.classList.add("fa","fa-trash-alt");

    li.addEventListener("click",deleteList);

    li.appendChild(p);
    li.appendChild(icon);
    ul.appendChild(li);

})
}



function deleteList(e){
const item = e.target.parentElement;
if(item.classList[0] === "list"){
    item.remove();
    deleteLocalStorage(item);
}
}



function deleteLocalStorage(item){
if(localStorage.getItem("values") === null){
    values = [];
}else{
    values = JSON.parse(localStorage.getItem("values"));
}

const indexValue = item.firstChild.innerHTML;
const index = values.indexOf(indexValue);
values.splice(index,1);
localStorage.setItem("values",JSON.stringify(values));
}

