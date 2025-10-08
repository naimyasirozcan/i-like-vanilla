// // Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// let items = [10, 20, 30, 40, ]
// console.log("items - ilk hali : ", items)

// // Array: sona oge/eleman eklemek -> push
// items.push(50)
// console.log("50 : ", items)

// // Array: basa oge eklemek -> unshift 
// items.unshift(5)
// console.log("5 : ", items)

// // Array: sondaki ogeyi cikarmak -> pop
// let lastItem = items.pop() // son elemani lastItem icerisine ekledik
// console.log("lastItem: ", lastItem, ", items: ", items)

// // Array: bastaki ogeyi cikarmak -> shift
// let firstItem = items.shift() // ilk elemani firstItem icerisine ekledik
// console.log("firstItem: ", firstItem, ", items: ", items)

// // Array icindeki bir ogenin bilgisinin degistirilmesi:

// // ilk ogenin degistirilmesi
// items[0] = 5;
// console.log(items)

// // sonuncu ogenin degistirilmesi:
// items[items.length - 1] = 1000
// console.log(items)

// items[2] = 10000
// console.log(items)

let domain = 'kodlyoruz'
let isActive = false
let items = [1,2,3, isActive, domain]

console.log(items)
// indekslerine gore konsola yazdi

// items += [1, 2, 3] boyle yaparsan string sekilde birlestirir
// console.log(items)

let emptyArray = [] //empty list for further usages

console.log('array uzunlugu: ',items.lenght)// arrayin uzunlugu
console.log('3. elemani cagir: ',items[3])// eleman cagirmak
console.log('son elemani cagir: ',items[items.length-1])// eleman cagirmak
console.log('array mi?: ', Array.isArray(items))// array control
console.log('array mi?: ', Array.isArray(true))// array control
console.log('array mi?: ', Array.isArray([]))// array control
console.log('array mi?: ', Array.isArray(1))// array control


items.push('50')// add element to arrays last index
console.log('sona yeni eleman eklendi--- ', `eklenen eleman: ${items[items.length -1]}`,`array son hali: `, items)

items.unshift(true) // add element to arrays first index

console.log('basa yeni eleman eklendi--- ', `eklenen eleman: ${items[0]}`,`array son hali: `, items)

let lastItem = items.pop() // remove last element of array
console.log(`Diziden son eleman cikarildi----, cikarilan eleman: ${lastItem}`, 'arrayin son hali: ', items)

let firstItem = items.shift() // remove first element of array
console.log(`Diziden ilk eleman cikarildi---- cikarilan eleman: ${firstItem}`, 'arrayin son hali: ', items)

let deletedItems = items.splice(0,2) // add/remove with index info

console.log(`Dizinin 0. indexinden itibaren 2 eleman cikarildi (ilk ve 2. elemanlar) ----`, 'cikarilan elemanlar: ', deletedItems, 'arrayin son hali: ', items)

let addedItems = items.splice(0,1,'naim','yasir','dijk')
console.log(`Dizinin 0. indexinden itibaren 1 eleman cikarildi 3 eleman eklendi (ilk eleman silindi yerine 3 eleman eklendi) ----`, 'cikarilan elemanlar: ', addedItems, 'arrayin son hali: ', items)

items = items.sort()
console.log('Dizi alfabetik siralandi --- Dizinin son hali: ', items ) //alphabetic sort

items = items.sort((a,b) => a-b)

// ---------------------------------------------------------------------------

// working with arrays 

let femaleUsers = ['ayse','fatma','humeyra','deniz','dondu']
let maleUsers = ['ahmet', 'mehmet', 'ali', 'gokdeniz','tayfun']
let arrayOne = [1,2,3,4]

arrayOne.unshift(maleUsers)
console.log(`erkek kullanicilar arrayi arrayOne'in basina eklendi`, `arrayin son hali: `, arrayOne)

arrayOne.push(femaleUsers)
console.log(`kadin kullanicilar arrayOne'in sonuna eklendi`,`arrayin son hali: `, arrayOne)

console.log(`items arrayinin ilk elemani olan arrayin uzunlugu:` , arrayOne[0].length)

console.log('alinin index bilgisi: ', maleUsers.indexOf('ali'))

// declaration ile array kopyalamayi deniyorum: 

let copyMaleUsers = maleUsers

console.log(`kopyalanan array (maleUsers): ` , maleUsers)
copyMaleUsers.pop()
console.log(`maleUsers copied to copyMaleUsers by declaration-- copyMaleUsers last item removed`, `copyMaleUsers: `, copyMaleUsers, `maleUsers: `, maleUsers) // bu yontemle array kopyalanmaz, memory management icin yapilmis bir uygulama, dogrusu bir sonraki ornekte:

// slice methodu ile array kopyalama: 

copyMaleUsers = maleUsers.slice()

copyMaleUsers.pop()

console.log(`maleUsers copied to copyMaleUsers by SLICE METHOD-- copyMaleUsers last item removed`, `copyMaleUsers: `, copyMaleUsers, `maleUsers: `, maleUsers) // ARRAY BU YONTEM ILE KOPYALANIR


// ES6'DA 3 NOKTA ILE ARRAY KOPYALAMA 

let es6maleUsers = [...maleUsers]

es6maleUsers.pop() 
console.log(`once maleUsers copyMale user'a declaration ile kopyalandi, copy poplandi, deklarasyon ile tanimlamada diziler eslenik tutuldugu icin copyMaleUsers degiskenine slice methoduyla yeni kopyalama yapildi, boylece ayri bir dizi olusturuldu, copyMaleUser yine poplandi, bu sefer cikarilan eleman maleUsers'tan cikmadi. 3. olarak es6 usulu yeni bir es6maleUsers arrayi olusturuldu ve o da poplandi`, `copyMaleUsers: `, copyMaleUsers, `maleUsers: `, maleUsers, 'es6maleUsers: ', es6maleUsers)

// ARRAY MERGE 

let allUsers = [...maleUsers, ...femaleUsers]

console.log(`birlestirilmis array: `, allUsers)

// ARRAY TO STRING 

let allUsersString = allUsers.toString()

console.log(`array stringe toString ile cevirildi: `, allUsersString)

// ELEMANLAR ARASINA KARAKTER/BOSLUK EKLEYEREK TO STRING 


console.log(`array stringe .join ile cevirildi: `, allUsers.join(" --- "))


// splice ile eleman ekleme 

let basicNumbers = [1,2,3,4,5,7,8,9,10,11]

console.log(`splice isleminden once basicNumbers: `, basicNumbers)

basicNumbers.splice(Math.floor(basicNumbers.length / 2), 0, 6)

console.log(`splice isleminden sonra basicNumbers: `, basicNumbers)
console.log(basicNumbers.length)