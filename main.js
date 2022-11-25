// Move the first letter of each wors to the end of it, then add 'ay' to the end
// of the word. Leave punctuation marks untouched.

                // SOLUTION 1
function pigIt(str){
    return str.split(' ').map(word => {
        return word.substr(1) + word[0] + 'ay'
    }).join(' ')
} 
alert(pigIt('Pig latin is cool'))


            // SOLUTION 2
// function pigIt(str){
//     let arrayWord = str.split(' ')
//     return arrayWord.map(word => {
//         let firstLetter = word.charAt(0)
//         return word.slice(1) + firstLetter + 'ay'
//     }).join(' ')
//  }
//  alert(pigIt('Pig latin is cool'))


                // // SOLUTION 3
// function pigIt(str){
//    return str.split(' ').map(word => `${word.substr(1)}${word[0]}`).join(' ')
// }
// alert(pigIt('Pig latin is cool'))




