//luua array numbritega ja leida spetsiifilise numbri index

const array=[1,2,3,4,5,6,"hi"]


function findMyIndex(array, element){
    return array.indexOf(element)
}

console.log(findMyIndex(array,4))

//arrow functions
//funktsioon, mis liidab 2 numbrit kokku ja tagastab summa


//minu tehtu
function addTwo(first, second){
    return first + second;
}

console.log(addTwo(4,2))



//essa näide
const arrowFunction = (n1,n2) =>{
    return n1 + n2
}
console.log(arrowFunction(3,5))



//teine näide
const arrowFunction2 = (n1,n2) => n1 + n2
console.log(arrowFunction2(3,5))

//const arrow = () => {}
//const arrow = () => (return)

//loo sellest funktsioonist arrowfunktsioon
function addNumbers2(num1, num2){
    return function addNumbersHelper(num2){
        return num1+num2
    }
}

console.log(addNumbers2(3)(4))

//ei ole vaja numbreid koos sisestada
//nooled tähistavad returne
//Nb! Kuidas kasutada arrowfunktsiooni
const arrowFunction3 = (num1) => (num2) => num1 + num2;
console.log(arrowFunction3(3)(5))

//AF printida "helklo (nimi)" ja kasutada string literals

//kuidas kirjutada muutujat
const nameJohanna = "Johanna"
const name = `Name is ${nameJohanna}`
//${variableName}

console.log(name)

const nameIs = (name) => `your name is` + `${name}`;
console.log(nameIs("Johanna"))

//mapiga näide
const numberArray = [1,2,3,4,5]
const newArray = numberArray.map((n) => n + 5)
//.map(() =>{})
//const newArray = [6,7,8,9,10]


const newArray2 = numberArray.map((element, index, array) => {
    return element + 5
})

console.log(newArray2)
//filter