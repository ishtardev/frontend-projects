let home = document.getElementById("home")
let guest = document.getElementById("guest")

let count = 0
let countguest = 0

function add1() {
    count += 1
    home.textContent = count
}

function add2() {
    count += 2
    home.textContent = count
}

function add3() {
    count += 3
    home.textContent = count
}

function guestadd1() {
    countguest += 1
    guest.textContent = countguest
}

function guestadd2() {
    countguest += 2
    guest.textContent = countguest
}

function guestadd3() {
    countguest += 3
    guest.textContent = countguest
}