let tabs = []

let inputEl = document.getElementById("input-el")
let saveinput = document.getElementById("save")
let saveTab = document.getElementById("tab")

let ulEl = document.getElementById("ul-el")

let tabsFromLocalStorage = JSON.parse(localStorage.getItem("tabs"))
if (tabsFromLocalStorage ){
    tabs = tabsFromLocalStorage 
    render()
}

saveinput.addEventListener("click", function(){
    tabs.push(inputEl.value)
    render()
    
    localStorage.setItem("tabs",JSON.stringify(tabs))

    console.log(localStorage.getItem("tab"))
})

function render() {
    ulEl.innerHTML += `<li><a href="#">${inputEl.value}</a></li> `
}

