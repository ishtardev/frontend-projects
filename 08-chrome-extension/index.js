let tabsArray = []

let inputEl = document.getElementById("input-el")
let saveinput = document.getElementById("save")
let saveTab = document.getElementById("tab")
let deleteBtn = document.getElementById("delete")

let ulEl = document.getElementById("ul-el")

saveTab.addEventListener("click", function(tabs) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        tabsArray.push(tabs[0].url)
        localStorage.setItem("tabsArray", JSON.stringify(tabsArray))
        render(tabsArray)
    })
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    tabsArray = []
    render(tabsArray)
})

let tabsArrayFromLocalStorage = JSON.parse(localStorage.getItem("tabsArray"))

if (tabsArrayFromLocalStorage ){
    tabsArray = tabsArrayFromLocalStorage 
    render(tabsArray)
}

saveinput.addEventListener("click", function(){
    tabsArray.push(inputEl.value)
    inputEl.value = ""
    render(tabsArray)

    localStorage.setItem("tabsArray",JSON.stringify(tabsArray))

    console.log(localStorage.getItem("tabsArray"))
})

function render(arr) {
    let itms = ""
    for (let i = 0; i < arr.length; i++){
        itms += `<li><a target="_blank" href='${arr[i]}'>${arr[i]}</a></li>`
    }
    ulEl.innerHTML = itms
}


