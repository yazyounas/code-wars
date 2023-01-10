//

//mplement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//(In this case, all triangles must have surface greater than 0 to be accepted).



function isTriangle(a,b,c)
{
   if(a + b > c && a + c > b && c + b > a) {
     return true;
     } else {
       return false;
       }
  
}

//In this kata you will create a function that takes a 
//list of non-negative integers and strings and returns a new list with the strings filtered out.


function filter_list(l) {
  // Return a new array with the strings filtered out
  let filteredList = []
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number'){
      filteredList.push(l[i])
    }
  }
  return filteredList
  
   }