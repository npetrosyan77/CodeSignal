function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}


const comUrl = urlGenerator('com')
console.log(comUrl('google'))

const amUrl = urlGenerator('am')
console.log(amUrl('dasaran'))


function generateFullName(lastName) {
    return function (firstName) {
        return `${firstName} ${lastName}`
    }
}



const sahakians = generateFullName('Sahakian')
const john = sahakians('John')
const jack = sahakians('Jack')
const dorian = sahakians('Dorian')

console.log(john)
console.log(jack)
console.log(dorian)




const womanFName = ['Lena', 'Anna', 'Liza']
const lastName = ['Smith', 'Johnson', 'Doil']

for (let n of womanFName) {
    const woman = generateFullName(n)
    console.log(woman(lastName[1]))
}


function fullName(f, l) {
    return `Hello ${f} ${l}!!!`
}


const anna = fullName('Anna', 'Johnson')
const mary = fullName('Mary', 'Johnson')
const lucy = fullName('Lucy', 'Johnson')
console.log(anna)
console.log(mary)
console.log(lucy)




