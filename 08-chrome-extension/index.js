let inputEl = document.getElementById("input-el")
let saveinput = document.getElementById("save")
let saveTab = document.getElementById("tab")

let ulEl = document.getElementById("ul-el")

saveinput.addEventListener("click", function(){
    ulEl.innerHTML += `<li><a href="#">${inputEl.value}</a></li> `
})


