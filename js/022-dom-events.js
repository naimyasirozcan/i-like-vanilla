// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

// let greeting = document.querySelector("#greeting")
// greeting.addEventListener("click", domClick)

// function domClick() {
//     console.log("etkinlik denetlendi")
//     this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
// }

// event listenerlar indeximizdeki etkinlikleri yakalamak icin varlar

let greeting1 = document.querySelector(`#greetingBtn1`)
let greeting2 = document.querySelector(`#greetingBtn2`)
let greeting3 = document.querySelector(`#greetingBtn3`)
let greeting4 = document.querySelector(`#greetingBtn4`)
let cta4 = document.querySelector(`#cta4`)


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

function youCantClick() {

}

greeting1.addEventListener('click', domClick)
greeting2.addEventListener('click', changeColor)
greeting3.addEventListener('mouseover', showPopover)
greeting4.addEventListener('mouseover', youCantClick)

let colorForm = document.querySelector(`#formColor`)
let selectForm = document.querySelector(`#selectColor`)
let submitBtn = document.querySelector(`#formSubmitBtn`)
let colorSquare = document.querySelector(`#colorResultSquare`)
let colorTitle = document.querySelector(`#colorResultTitle`)



selectForm.addEventListener('change', function showColor(e) {
    let selectedColor = e.target.value
    let eventType = e.type
    console.log(`islem tipi: ${eventType} secilen renk: ${selectedColor}`)
})

colorForm.addEventListener(`submit`, function getColor(e) {
    e.preventDefault()
    let selectedColor = selectForm.value
    colorSquare.classList.toggle(`d-none`)
    colorSquare.classList.add(`bg-${selectedColor}`)

    
  // Önceki bg-* class'ını temizle (önceki çalışmayı bozmasın diye)
  colorSquare.classList.remove('bg-success', 'bg-warning', 'bg-danger', 'bg-primary');

  // Renk kutusunu görünür yap
  colorSquare.classList.remove('d-none');

  // Yeni rengi uygula
  colorSquare.classList.add(`bg-${selectedColor}`);

  // Başlık güncelle
  colorTitle.textContent = `Seçilen renk:`;
  colorTitle.classList.remove('d-none');

    console.log(`form submitted succesfully, the selected color is: ${selectedColor}`)
})
