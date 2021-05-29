// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    let resultString = ''
    for (let i=ending.length-1; i>=0; i--){
      index = i+str.length-ending.length
      resultString += str[index]
    }
    resultString = resultString.split("").reverse().join("")
    return resultString === ending
  }
  