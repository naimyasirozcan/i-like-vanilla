
//dom deneme
console.log(`dom deneme konsola document id yazdirma: `, document.URL)

let heroGreeting = document.querySelector(`#heroGreeting`)
ItemroParagraph = document.querySelector(`#heroParagraph`)

// CARDS

document.getElementById("test-paragraph-1").innerHTML = `this text changed by dom manipulation`


// LISTS

let list1FirstItem = document.querySelector(`#list1>a`)
list1FirstItem.innerHTML += `info added`
list1FirstItem.classList.remove('active')

let list1LastItem = document.querySelector(`#list1 a:last-child`)
list1LastItem.classList.remove(`disabled`)

let list2 = document.querySelector('#list2')
let liDOM = document.createElement(`a`)
liDOM.classList.add('list-group-item','list-group-item-action')
liDOM.innerHTML = 'yeni bilgi eklendi'
list2.append(liDOM)

let list2FirstItem = document.querySelector('#list2 a:first-child')
list2FirstItem.style.color = 'purple'
console.log(list2FirstItem.innerHTML)

let list3FirstItem = document.querySelector('#list3 a:first-child')
list3FirstItem.innerHTML = `test dom`

let list3LastItem = document.querySelector('#list3 a:last-child')
list3LastItem.classList.remove('disabled')

// Sticky-top menu change color after scroll

const navbar = document.querySelector('#mainNavbar')

window.addEventListener('scroll', () => {
    if (window.scrollY > 333) {
        navbar.classList.remove('navbar-default')
    } else {
        navbar.classList.add('navbar-default')
    }
})

// let guestName = prompt("Please enter your name.")

// let guestNameFirstSpaceIndex  = guestName.indexOf(' ')

// let guestNameFirstLetter = guestName[0].toUpperCase()

// let guestNameRest = guestName.slice(1,(guestNameFirstSpaceIndex))

// guestNameRest = guestNameRest.toLowerCase()

// guestName = guestNameFirstLetter+guestNameRest

// heroGreeting.innerHTML = (`Hello ${guestName}!`)
