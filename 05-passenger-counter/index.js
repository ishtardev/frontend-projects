let countText = document.getElementById("peopleEntered")
let count = 0
count.innerText = 0
function increment() {
    count += 1
    countText.innerText = count
}

let registry = document.getElementById("previousEntries")

function save() {
    let countstr = count + " - "
    registry.textContent += countstr
    countText.innerText = 0
    count = 0
}