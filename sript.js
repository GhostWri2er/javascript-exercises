function add7 (number) {
    return number + 7
}

console.log(add7(10))

function multiply (a, b) {
    return a * b
}

console.log(multiply(3, 2))

function capitalize (str) {
   let substr = str.toLowerCase()
    console.log(substr)
  return  substr[0].toUpperCase() + substr.slice(1)
    
}

console.log(capitalize('aaASDSDS'))

function lastLetter (str) {
    return str.slice(-1)
}

console.log(lastLetter('12312asdsa'))