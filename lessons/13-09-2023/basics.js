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

//kolm valikut tavaliselt
const newArray2 = numberArray.map((element, index, array) => {
    //key value paar
    //short hand, key ja value sama muutujaga siis ei pea panema koolonit( element:element, "index"=index... pole tarvis)
    console.log({element, newElement: element + 5, index, array})
    return element + 5
})

console.log(newArray2)




//Filter

//omab kõiki neid arve mis on väiksemad kui 4
const filteredArray= numberArray.filter(element => element < 4)
//paneb listi kui true
console.log({numberArray,filteredArray})


//vaja tekitada uus array iga inimese andmetega
//nimi on nagu on
//vanus 20 aastat juurde indexi arvule
//email nimi@company.com
//aadress suvakas
//
const names = ['Juku', 'Mari', 'Jaan', 'Annika']

const data = names.map(name => {
    return {
        name: name,
        age: name.length + 20,
        email: `${name.toLowerCase()}@company.com`,
        aadress:`${name} Street 35`,
        username: name.split("").reverse().join("")
    }
})

console.log(data)

console.log(data[0])

//tahan lisada pikkuse juurde

const newJuku ={
    ...data[0],
    height:175
}

console.log({newJuku})

//kui tahad midagi üle kirjutada
const evenNewerJuku ={
    ...data[0],
    age:99
}

console.log({newJuku, evenNewerJuku})