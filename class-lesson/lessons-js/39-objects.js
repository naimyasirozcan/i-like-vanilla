// Object(Nesne) Nedir ? Nasıl Oluşturulur?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
let arrayObj = [1, 2, 3]
let object1 = {obj: 1}

console.log("arrayObj", typeof(arrayObj))
console.log("object1", typeof(object1))

let item1 = new Object()
let item2 = {}
console.log("item1", typeof(item1))
console.log("item2", typeof(item2))

// Object olusturmak
let item3 = {}
let item4 = new Object()

console.log("object1", object1)

let user1 = {
    name: 'yasir',
    surname: 'ozcan',
    birthYear: 1997,
}

 console.log(user1.birthYear)

 let message = 'welcome'
 let anotherMessage = 'welcome'
 console.log(message == anotherMessage)

 let objMessage = {
    message: 'merhaba'
 }
 let anotherObjMessage = {
    message2: 'merhaba'
 }

 console.log(objMessage == anotherObjMessage)
 console.log(objMessage.message == anotherObjMessage.message2)

const laptop1  = {
   brand: 'apple',
   model: 'macbook',
   productionDate: '09/2025'
}

laptop1.model = 'macbook air'

console.log(laptop1.model)

laptop1.version = '17.09.34.2'

console.log(laptop1.version)

console.log(Boolean(laptop1.version))
delete  laptop1.version
console.log(Boolean(laptop1.version))



let keys = Object.keys(laptop1)
let values = Object.values(laptop1)

console.log(keys, values)


