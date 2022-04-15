let inputText = document.querySelector("input");
let btn = document.querySelector(".submit");
let toDoArray = [];
let sort = document.querySelector(".sort")
let ul = document.querySelector("ul");
let deleteBtn = document.querySelector(".delete-img")


let storage = localStorage.getItem("array");
if(storage==null){
    toDoArray=[];
}
else{
    toDoArray = JSON.parse(localStorage.getItem("array"));
    let text = '';
    toDoArray.forEach((item,index)=>{
        text += `<li><p>${item}</p><img onclick="deleteLi(${index})" src="./img/delete.png"></li>`
    })
    ul.style.display = "block";
    ul.innerHTML=text;

}

function setArray(){
    let text = '';
    toDoArray.forEach((item,index)=>{
        text += `<li><p>${item}</p><img class="delete-list-img" onclick="deleteLi(${index})" src="./img/delete.png"></li>`
    })
    ul.innerHTML=text;
    localStorage.setItem("array", JSON.stringify(toDoArray));
}


btn.addEventListener("click", ()=>{
    toDoArray.push(inputText.value);
setArray(toDoArray);
    ul.style.display = "block";

})

function deleteLi(index){
        toDoArray.splice(index,1);
    setArray(toDoArray);
}

sort.addEventListener('mouseover', (e) => {
    if (e.target.getAttribute('src') =='./img/default-up.png') {
        e.target.setAttribute("src", "./img/up.svg");
    } else  {
        
        e.target.setAttribute("src", "./img/down.png");
    }
});

sort.addEventListener('mouseout', (e) => {
    if (e.target.getAttribute("src") == "./img/up.svg") {
        e.target.setAttribute("src", "./img/default-up.png");
    } else  {
        e.target.setAttribute("src", "./img/default-down.png");
    }
});

sort.addEventListener("click", (e)=>{
    if (e.target.getAttribute("src") == "./img/down.png"){
        toDoArray.sort();
        setArray(toDoArray);
        e.target.setAttribute("src", "./img/up.svg")
    }
    else{
        toDoArray.sort().reverse();
        setArray(toDoArray);
        e.target.setAttribute("src", "./img/down.png")
    }
})