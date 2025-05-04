document.getElementById("test-paragraph-1").innerHTML = `this text changed by dom manipulation`

//dom deneme
console.log(`dom deneme konsola document id yazdirma: `, document.URL)

let list1 = document.querySelector('#list1')

console.log(list1.innerHTML)

let list3item1 = document.querySelector('#list3item1')

list3item1.innerHTML = `test dom`

let firstListItem = document.querySelector(`ul#list1>a`)

firstListItem.innerHTML += `info added`

// firstListItem.style.backgroundColor = 'pink'


firstListItem.classList.remove('active')

let lastListItem = document.querySelector(`#list1 a:last-child`)

lastListItem.classList.remove(`disabled`)

let heroGreeting = document.querySelector(`#heroGreeting`)

let heroParagraph = document.querySelector(`#heroParagraph`)
let guestName = prompt("Please enter your name.")

let guestNameFirstSpaceIndex  = guestName.indexOf(' ')

let guestNameFirstLetter = guestName[0].toUpperCase()

let guestNameRest = guestName.slice(1,(guestNameFirstSpaceIndex))
guestNameRest = guestNameRest.toLowerCase()

guestName = guestNameFirstLetter+guestNameRest

heroGreeting.innerHTML = (`Hello ${guestName}!`)
