let tabs = []

let inputEl = document.getElementById("input-el")
let saveinput = document.getElementById("save")
let saveTab = document.getElementById("tab")
let deleteBtn = document.getElementById("delete")

let ulEl = document.getElementById("ul-el")

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    tabs = []
    render(tabs)
})

let tabsFromLocalStorage = JSON.parse(localStorage.getItem("tabs"))

if (tabsFromLocalStorage ){
    tabs = tabsFromLocalStorage 
    render(tabs)
}

saveinput.addEventListener("click", function(){
    tabs.push(inputEl.value)
    render(tabs)

    localStorage.setItem("tabs",JSON.stringify(tabs))

    console.log(localStorage.getItem("tab"))
})

function render(arr) {
    let itms = ""
    for (let i = 0; i < arr.length; i++){
        itms += "<li><a href='#'>"+arr[i]+"</a></li>"
    }
    ulEl.innerHTML = itms
}


