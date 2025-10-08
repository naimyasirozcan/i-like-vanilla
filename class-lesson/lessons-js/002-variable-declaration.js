// ********** let ve const ile Degisken Tanimlama ********** 

// var ile degisken tanimlamak:
// var serverName = "api.kodluyoruz.org"
// console.log(serverName)

// let ile degiskeni bos tanimlamak:
let serverName;
console.log(serverName)

// let ile degiskene bilgi atamak:
serverName = "https://kodluyoruz.org"
console.log(serverName)

// let ile degiskene bilgi atayarak tanimlamak:
let password = "1234";
console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak:
/* HATALI KULLANIM:  

console.log(fullName)
let fullName = "Ozge Ozcan";
*/
let fullName = "Ozge Ozcan";

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:

fullName = "Naim Yasir Ozcan"
console.log(fullName)

// birlestirme veya ekleme islemi
fullName + "Yeni Eklenen Bilgi" // acaba eklendi mi?
console.log(fullName + " Test Bilgisi") // Ekle ve Goster ama Degiskene Eklemedik

fullName = fullName + " Yeni Bilgi"
fullName =  "2: Bilgi : " + fullName
console.log(fullName)

fullName = "Sifirlandi"
fullName += " ve Yeni Bilgi Eklendi"
console.log(fullName)

// const ile degiskeni bos tanimlamaya calismak :( :
// const serverPassword; // sadece degisken tanimlandi ama ici bos ??

// const ile degisken tanimlamak:
const SERVER_PASSWORD = "oisjefo9jwes221"
console.log(SERVER_PASSWORD)

// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)