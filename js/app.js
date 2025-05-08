
//dom deneme
console.log(`dom deneme konsola document id yazdirma: `, document.URL)

let heroGreeting = document.querySelector(`#heroGreeting`)
ItemroParagraph = document.querySelector(`#heroParagraph`)


// HERO GREETING SECTION DECLARATIONS

let greetingHeader = document.querySelector('#greetingHeader')

let greetingPar = document.querySelector('#greetingPar')


// greetingHeader.classList.add('text-dark')

// ---------------------------------------------------------------------------------


// CARDS

document.getElementById("test-paragraph-1").innerHTML = `this text changed by dom manipulation`

// ---------------------------------------------------------------------------------

// LISTS

let list1FirstItem = document.querySelector(`#list1>a`)
list1FirstItem.innerHTML += `info added`
list1FirstItem.classList.remove('active')

let list1LastItem = document.querySelector(`#list1 a:last-child`)
list1LastItem.classList.remove(`disabled`)

let list2 = document.querySelector('#list2')
let liDOM = document.createElement(`a`)
liDOM.classList.add('list-group-item', 'list-group-item-action')
liDOM.innerHTML = 'yeni bilgi eklendi'
list2.append(liDOM)

let list2FirstItem = document.querySelector('#list2 a:first-child')
list2FirstItem.style.color = 'purple'
console.log(list2FirstItem.innerHTML)

let list3FirstItem = document.querySelector('#list3 a:first-child')
list3FirstItem.innerHTML = `test dom`

let list3LastItem = document.querySelector('#list3 a:last-child')
list3LastItem.classList.remove('disabled')

// ---------------------------------------------------------------------------------

// Sticky-top menu change color after scroll

const navbar = document.querySelector('#mainNavbar')

window.addEventListener('scroll', () => {
    if (window.scrollY > 333) {
        navbar.classList.remove('navbar-default')
    } else {
        navbar.classList.add('navbar-default')
    }
})


// ---------------------------------------------------------------------------------

// PROMPT 

// let guestNameDOM = prompt("Please enter your name.")

// let guestName = guestNameDOM.split(" ")[0]

// ---------------------------------------------------------------------------------


//IF KULLANIMI

// if (guestName === 'yasir') {
//     greetingHeader.innerHTML = 'ADAM GELDI YA ADAM'
//     greetingHeader.classList.add('text-danger')
// } else if (guestName === 'ozge') {
//     greetingHeader.innerHTML = (`HOSGELDIN DUNYANIN EN GUZEL KADINI ${guestName[0].toUpperCase()}${guestName.slice('1', (guestName.length))} KARICIMMMM`)
//     greetingHeader.classList.add('text-pink','text-center')
// } else {
//     greetingHeader.innerHTML = 'Hosgeldin. Sen miydin. -.-'
//     greetingHeader.classList.add('text-light', 'text-center')
// }

// ---------------------------------------------------------------------------------

// IF STRUCTURE VIA TERNARY OPERATOR 

// greetingHeader.innerHTML = `${guestName.length > 0 ? ('Wellcome ' + guestName[0].toUpperCase() + guestName.slice('1',guestName.length).toLowerCase() + '.') :'Welcome Mysterious Guy.'}`

// ---------------------------------------------------------------------------------

// TOSS GAME

let tossBtn = document.querySelector('#tossBtn')

tossBtn.addEventListener('click', () => {
    tossBtn.classList.remove('flip')
    void tossBtn.offsetWidth
    tossBtn.classList.add('flip')
})