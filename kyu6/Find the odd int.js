// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    counter = {}
    A.forEach((num)=>{
      num in counter ? counter[num]++ : counter[num] = 1
    })
    for (let key of Object.keys(counter)){
      if (counter[key] % 2 !== 0) {
        return Number(key)
      }
    }
  }
  
  findOdd([1,2,1,2,1]);
