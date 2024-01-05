const inputEl = document.getElementById("inputEl")
const inputBtn = document.getElementById("inputBtn")
const listEl = document.getElementById("listEl")


inputBtn.addEventListener("click",function(){
    if(inputEl.value === ""){
        alert("You need to type something")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputEl.value
        listEl.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        inputEl.value = ""
    }
    setLocalStorage()
})

listEl.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        setLocalStorage()
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        setLocalStorage()
    }
})

function setLocalStorage(){
    localStorage.setItem("list",listEl.innerHTML)
}

function getLocalStorage(){
    listEl.innerHTML = localStorage.getItem("list")
}

getLocalStorage()