// // ********** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak **********

// // Temel Kurallar:
// // 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// // 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// // 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir


// let firstName = "Lorem"

// function greetings(firstName="", lastName="") { // default parametre aliyor..
//     // console.log(`Merhaba ${firstName ? firstName : ""}`)
//     // console.log(`Merhaba ${firstName}`)
//     console.log(`Merhaba ${firstName} ${lastName}`)
// } 

// console.log(firstName) // degisken
// greetings() // fonksiyona parametre gondermedik ??
// greetings("Parametre")

// function greetings2(firstName, lastName) {
//     let info = `Merhaba ${firstName} ${lastName}`
//     return info
// }

// let greetingsInfo = greetings2("Ad", "Soyad")
// // let info = "deneme" // ?????
// console.log(greetingsInfo)

// function domIdWriteInfo(id, info) {
//     let domObject = document.querySelector(`#${id}`)
//     domObject.innerHTML = info
// }

// let htmlInfo = `<span style="color:red">Color REDDDD</span>`

// domIdWriteInfo('greeting', htmlInfo)
// domIdWriteInfo('info', greetings2("Lorem", "Ipsum") )


function greetings(firstName='', lastName='') {
    // console.log(`merhaba ${firstName ? firstName : ''}`)
    console.log(`merhaba ${firstName}`)
    return `merhaba ${firstName}`
}

greetings('')
greetings('parametre')

greetings()

let info = greetings()

console.log(info)

function greetings2 (firstName='', lastName='') {
    let info = `merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2('naim','ozcanogullarigil')

console.log(greetingsInfo)

function domIdWriteInfo(id,info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let substract = (a,b) => {return a - b}

console.log(substract(7,5))

function multiple(a,b) {
    let result = a*b 
    return result
}

let multipleResult = multiple(3,5)

console.log(multipleResult)

const PI = 3.14

let circle = (r) => {return PI * (r*r)} 

console.log(circle(3))


// let htmlInfo = `<span style="color:red"> Color Reddd </span>`

// domIdWriteInfo('greetingHeader', htmlInfo)
// domIdWriteInfo('greetingPar', greetings2('murtaza','yavas'))

// function addition (a,b) {
//     let result = a + b
//     return result
// 

