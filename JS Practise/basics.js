//1. Write a JavaScript program to display the current day and time in the following format.

function currentDate() {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let d = new Date();
    let currentWeekDay = d.getDay()
    let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

    return `Today is ${weekDays[currentWeekDay]} and the current time is ${time}`
}

console.log(currentDate())


//2. Write a JavaScript program to get the current date (mm-dd-yyyy, mm/dd/yyyy).

function getTime() {
    let date = new Date();
    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();

    if (month < 10) { month = '0' + month }
    if (day < 10) { day = '0' + day }

    let today1 = `${month}-${day}-${year}`
    let today2 = `${month}/${day}/${year}`
    console.log(today1);
    console.log(today2);
}

getTime();


//3.Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function calcArea(a, b, c){
    let sp = (a+b+c)/2,
        areaFormula = Math.sqrt(sp * (sp - a) * (sp-b) * (sp-c))

    return areaFormula
}

console.log(calcArea(5, 6, 7));


//4. Write a JavaScript program to rotate the string 'w3resource' in right direction
// by periodically removing one letter from the end of the string and attaching it to the front.
function rotateWord(word){
    let newWord = [];
    let letters = word.split('');
    for(let l of letters){
        newWord.unshift(l)
    }
    return newWord.join('')
}

console.log(rotateWord('w3resource'));

