let tabs = []
let inputEl = document.getElementById("input-el")
let saveinput = document.getElementById("save")

saveinput.addEventListener("click", function(){
    tabs.push(inputEl.value)
    console.log("tabs", tabs)
})