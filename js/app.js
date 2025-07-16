
console.log(`dom deneme konsola document id yazdirma: `, document.URL)

// ---------------------------------------------------------------------------------
// STICKY TOP MENU LISTENER

const navbar = document.querySelector('#mainNavbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 333) {
    navbar.classList.remove('navbar-default')
  } else {
    navbar.classList.add('navbar-default')
  }
})


// ---------------------------------------------------------------------------------



// HERO SECTION

// EVENT LISTENER EXAMPLES

// ---------------------------------------------------------------------------------
// greeting section declarations

// burada karsilama mesaji icin tanimlamalarimi yaptim ve kosula bagli olarak icerik ayarladim:

let guestName
// guestName = prompt('Welcome!') 
let greetingHeader = document.querySelector('#greetingHeader')
let greetingPar = document.querySelector('#greetingPar')

if (guestName) {
  (greetingHeader.innerHTML = `Hi <strong>${guestName[0].toUpperCase()}${guestName.toLowerCase().slice(1)}</strong>, welcome! You are visiting my page on: <span id="timeInfoDOM"></span>`)
} else {
  greetingHeader.innerHTML = `Hi, welcome dear guest! You are visiting my page on: <span id="timeInfoDOM"></span>`
}

// burada yukarida kosula bagli olarak inner html icerisine olusturdugum spanin tanimlamasini yaptim, tanimlama yukarida yapilirsa kod calismiyormus ogrenmis olduk

let timeInfoDOM = document.querySelector('#timeInfoDOM')



function getTimeLive() {
  const now = new Date()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayWeek = days[now.getDay()]
  const months = ["Janruary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const year = String(now.getFullYear())
  const dayMonth = String(now.getDate())
  const month = months[now.getMonth()]
  const hour = String(now.getHours()).padStart(2, '0')
  const minute = String(now.getMinutes()).padStart(2, '0')
  const second = String(now.getSeconds()).padStart(2, '0')
  const formattedTime = `${dayMonth} ${month} ${year} ${dayWeek} ${hour}:${minute}:${second}`
  timeInfoDOM.innerHTML = `<strong style="color: wheat">${formattedTime}</strong>`
}

setInterval(getTimeLive, 1000)
getTimeLive()








// ---------------------------------------------------------------------------------

// LOCAL STORAGE USAGE FIRST TRY

let user = {
  name: 'yasir',
  surname: 'ozcan',
  level: 'c1'
}

console.log(user)

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo')

userInfo = JSON.parse(userInfo)

console.log(`local storagetan user bilgisi ${JSON.stringify(userInfo)}`)


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

// head or tails part

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


// animation end event Listener 

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

// ---------------------------------------------------------------------------------

// BUTTON EXAMPLES
let greeting1 = document.querySelector(`#greetingBtn1`)
let greeting2 = document.querySelector(`#greetingBtn2`)
let greeting3 = document.querySelector(`#greetingBtn3`)
let greeting4 = document.querySelector(`#greetingBtn4`)
let cta4 = document.querySelector(`#cta4`)

greeting1.addEventListener('click', domClick)
greeting2.addEventListener('click', changeColor)
greeting3.addEventListener('mouseover', showPopover)

function domClick() {
  this.classList.toggle('btn-danger')
  this.classList.toggle('btn-warning')
}

function changeColor() {
  this.style.color == 'red' ? this.style.color = 'black' : this.style.color = 'red'
}
function showPopover() {
  alert('gelme ustume')
}


// ---------------------------------------------------------------------------------


// BASIC COUNTER

let plusBtn = document.querySelector(`#increaseBtn`)
let minusBtn = document.querySelector(`#decreaseBtn`)
let counterResultDOM = document.querySelector(`#counterResult`)
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
counterResultDOM.innerHTML = counter

const counterFunc = (e) => {
  e.target.id == 'increaseBtn' ? counter++ : counter--
  localStorage.setItem('counter', counter)
  counterResultDOM.innerHTML = counter
}

plusBtn.addEventListener('click', counterFunc)
minusBtn.addEventListener('click', counterFunc)

// ---------------------------------------------------------------------------------


// color form 


let colorForm = document.querySelector(`#formColor`)
let selectColor = document.querySelector(`#selectColor`)
let colorTitle = document.querySelector(`#colorResultTitle`)
let colorSquare = document.querySelector(`#colorResultSquare`)



selectColor.addEventListener('change', function showColor(e) {
  let selectedColor = e.target.value
  let eventType = e.type
  console.log(`islem tipi: ${eventType} secilen renk: ${selectedColor}`)
})


colorForm.addEventListener(`submit`, function getColor(e) {
  e.preventDefault()
  let selectedColor = selectColor.value
  colorSquare.classList.toggle(`d-none`)
  colorSquare.classList.add(`bg-${selectedColor}`)


  colorSquare.classList.remove('bg-success', 'bg-warning', 'bg-danger', 'bg-primary');
  colorSquare.classList.remove('d-none');
  colorSquare.classList.add(`bg-${selectedColor}`);
  colorTitle.textContent = `Color chosen:`;
  colorTitle.classList.remove('d-none');

  console.log(`form submitted succesfully, the selected color is: ${selectedColor}`)
})

// ---------------------------------------------------------------------------------

// Letter Grade Calculator 

let letterGradeFormDOM = document.querySelector(`#gradeCalculator`)

letterGradeFormDOM.addEventListener('submit', calculateGrade)

function calculateGrade(e) {
  e.preventDefault()
  let courseName = String(document.querySelector('#courseName').value)
  let firstExam = Number(document.querySelector('#firstExam').value)
  let secondExam = Number(document.querySelector('#secondExam').value)
  let finalScore = (firstExam * (4 / 10)) + (secondExam * (6 / 10))
  
  if (firstExam < 0 || firstExam > 100 || secondExam < 0 || secondExam > 100) {
    alert('please enter a number between 0-100')
  } else {
    let letterGrade
    
    (finalScore >= 0 && finalScore < 40) ? letterGrade = 'FF' :
    (finalScore >= 40 && finalScore < 50) ? letterGrade = 'FD' :
    (finalScore >= 50 && finalScore < 55) ? letterGrade = 'DD' :
    (finalScore >= 55 && finalScore < 60) ? letterGrade = 'DC' :
    (finalScore >= 60 && finalScore < 70) ? letterGrade = 'CC' :
    (finalScore >= 70 && finalScore < 80) ? letterGrade = 'CB' :
    (finalScore >= 80 && finalScore < 85) ? letterGrade = 'BB' :
    (finalScore >= 85 && finalScore < 90) ? letterGrade = 'BA' :
    (finalScore >= 0 && finalScore <= 100) ? letterGrade = 'AA' : letterGrade = 'error'
    
    console.log(`final avarage score is: ${finalScore} letterGrade is: ${letterGrade}`)
  }
  
}

function addLetterGrade(courseName, examGrade) {
  
  
}


// ---------------------------------------------------------------------------------