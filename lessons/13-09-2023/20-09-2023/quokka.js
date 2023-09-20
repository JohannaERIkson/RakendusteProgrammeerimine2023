

(() => {
    console.log('hi')
})()


console.log(1 == '1')
console.log(1==='1')


//STRING TO NUMBER, parseInt
const actuallyANumber = '1'
console.log(parseInt(actuallyANumber))
console.log(+actuallyANumber)


//koha vahetus
let a = 5
let b = 99
let c = 0
c = a
a = b
b = c

console.log(a)
console.log(b)

//objekti välja võtmine
const raimo = {
    name:"Raimo",
    school: "TLU",
    "dreams and etc": "jjj"
}

console.log(raimo.name + " " + raimo.school)
console.log(raimo["name"] + " " + raimo["school"])
console.log(raimo["dreams and etc"])



