
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

// declarations: 
let tossBtn = document.querySelector('#tossBtn')
let tossWallet = document.querySelector('#tossWallet')
let tossScore = 0
let tossBinaryResult
let headBtn = document.querySelector('#tossHead')
let tailsBtn = document.querySelector('#tossTails')
let headOrTailsDOM = document.querySelector('#headOrTails')
let headOrTailsChoiceDOM = document.querySelector('#headOrTailsChoice')
let tossContainer = document.querySelector(`.toss-container`)
let tossAlert = document.querySelector('#tossAlert')
let userChoice = null
let walletAmount = 100
let winRow = 0
let loseRow = 0
let headClickCounter = 0
let tailsClickCounter = 0
let roundResult = document.querySelector('#roundResult')

tossWallet.innerHTML = `$ ${walletAmount}`

// head or tails

headBtn.addEventListener('click', function headChoose() {

  
  console.log('head click counter:' + headClickCounter)
  headClickCounter = headClickCounter + 1
  roundResult.classList.add('d-none')
  tossContainer.style.backgroundImage = "url('/assets/toss-default.png')"
  userChoice = 0
  headOrTailsDOM.innerHTML = 'YOU SAID:'
  headOrTailsChoiceDOM.innerHTML = `HEAD <img id="tossSurface" src="/assets/Ataturk.png" alt="">`
  console.log('user chose HEAD')

  if (headClickCounter === 1) {

    if (tailsClickCounter === 0) {
      walletAmount = walletAmount - 10
      tossWallet.innerHTML = `$ ${walletAmount}`
    } else if (tailsClickCounter > 0) {
      tailsClickCounter = 1
    }
  } else if (headClickCounter > 1) {
    headClickCounter = 1
  }

})

tailsBtn.addEventListener('click', function tailsChoose() {

  console.log('tails click counter:' + tailsClickCounter)
  tailsClickCounter = tailsClickCounter + 1

  roundResult.classList.add('d-none')
  tossContainer.style.backgroundImage = "url('/assets/toss-default.png')"
  userChoice = 1
  headOrTailsDOM.innerHTML = 'YOU SAID:'
  headOrTailsChoiceDOM.innerHTML = 'TAILS 1₺'
  if (tailsClickCounter === 1) {

    if (headClickCounter === 0) {
      walletAmount = walletAmount - 10
    tossWallet.innerHTML = `$ ${walletAmount}`
    } else if (headClickCounter > 0) {
      headClickCounter = 1
      
    }
    
    console.log('user chose TAILS')

  } else if (tailsClickCounter > 1) {
    tailsClickCounter = 1
  }

})

// tossBtn click event

tossBtn.addEventListener('click', () => {

  if (userChoice === null) {
    tossAlert.classList.remove('d-none')
    return;
  } else {
    tossBtn.classList.remove('flip')
    void tossBtn.offsetWidth
    tossBtn.innerHTML = ''

    tossBinaryResult = Math.floor(Math.random() * 2)

    tossBtn.classList.add('flip')
    console.log('Binary result: ' + tossBinaryResult)
    tailsClickCounter = 0
    headClickCounter = 0
  }
})


// Animation End Event Listener 

tossBtn.addEventListener('animationend', () => {
  if (tossBinaryResult === 0) {
    tossBtn.innerHTML = `<img id="tossSurface" src="/assets/Ataturk.png" alt="">`
    console.log('coin is HEAD')
  } else if (tossBinaryResult === 1) {
    tossBtn.innerHTML = `1₺`
    console.log('coin is TAILS')
  }


  if (userChoice === tossBinaryResult) {

    loseRow = 0
    winRow = winRow + 1
    console.log(`Win row: ${winRow}`)
    walletAmount = walletAmount + 20
    tossWallet.innerHTML = `${walletAmount}`

    if (winRow === 1) {
      roundResult.innerHTML = 'You are lucky...Click for next round.'
      roundResult.classList.remove('d-none')
      tossContainer.style.backgroundImage = "url('/assets/toss-think.png')"

    } else if (winRow === 2) {
      roundResult.innerHTML = 'Two times, ha? Keep going.'
      roundResult.classList.remove('d-none')
      tossContainer.style.backgroundImage = "url('/assets/toss-concern.png')"
    } else if (winRow === 3) {
      roundResult.innerHTML = 'You gonna make me poor, gambler?? One more time?'
      roundResult.classList.remove('d-none')
      tossContainer.style.backgroundImage = "url('/assets/toss-angry.png')"
    } else if (winRow === 4) {
      roundResult.innerHTML = 'This is my first cry since I born'
      roundResult.classList.remove('d-none')
      tossContainer.style.backgroundImage = "url('/assets/toss-cry.png')"
    } else {
      roundResult.innerHTML = 'I BEG YOU, STOP!!'
      roundResult.classList.remove('d-none')
      tossContainer.style.backgroundImage = "url('/assets/toss-cry.png')"
    }
  } else if (userChoice !== tossBinaryResult) {
    winRow = 0
    loseRow = loseRow + 1
    console.log(`Lose row: ${loseRow}`)
    if (loseRow === 1) {
      roundResult.innerHTML = 'Unlucky...Click for next round.'
      roundResult.classList.remove('d-none')
      tossContainer.style.backgroundImage = "url('/assets/toss-concern.png')"
    } else if (loseRow === 2) {
      roundResult.innerHTML = 'Devil is not with you, one more?'
      roundResult.classList.remove('d-none')
      tossContainer.style.backgroundImage = "url('/assets/toss-default.png')"
    } else if (loseRow === 3) {
      roundResult.innerHTML = 'I think this game is not for you xD'
      roundResult.classList.remove('d-none')
      tossContainer.style.backgroundImage = "url('/assets/toss-xd.png')"
    } else {
      roundResult.innerHTML = 'AHAAHAHAHAHAHAHAHHA!!!!!!'
      roundResult.classList.remove('d-none')
      tossContainer.style.backgroundImage = "url('/assets/toss-xd.png')"
    }
  }

  userChoice = null

})

tossAlert.addEventListener('click', function closeTossAlert() {
  tossAlert.classList.add('d-none')
})

roundResult.addEventListener('click', function closeRoundResult() {
  roundResult.classList.add('d-none')
  headOrTailsDOM.innerHTML = 'HEAD OR TAILS?'
  headOrTailsChoiceDOM.innerHTML = ''
})