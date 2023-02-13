//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.

function findShort(s){
  
    let word = s.split('');
    
    let shortLength = Infinity
    
    for (let i = 0; i < word.length; i++) {
       if(word[i].length < shortLength){
         shortLength = word[i].length
       }
    }
    return shortLength
  }

function fuzzbuzz(num) {

  return sum +num
}