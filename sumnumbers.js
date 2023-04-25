

var summation = function (num) {
    // Code here
    let sum = 0
    for (let i = 1; i <= num; i++) {
      sum += i
    }
    return sum
  }

//get vowelscount
function getCount(str) {

const vowels = ['a', 'e', 'i', 'o', 'u']
const string = str.toLowerCase().split('')

const countVowels = string.filter(char => vowels.includes(char));

return countVowels.length
  }

  
  //string is only lowercase

//create variable called vowels
//create another variable count 
//run for loop to check if the string include vowels 
//return count of vowels in a string 
