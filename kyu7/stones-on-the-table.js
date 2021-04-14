// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

// Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

// Examples:

// "RGBRGBRGGB"   => 1
// "RGGRGBBRGRR"  => 3
// "RRRRGGGGBBBB" => 9

function solve(stones) {
    const splittedString = stones.split('')
    const parsedArray = splittedString.filter((char, index) => {
      if (index !== 0) {
        return splittedString[index-1] !== char
      } else {
        return char
      }
    })
    return splittedString.length-parsedArray.length
  }
  
  //console.log(solve("RRRRGGGGBBBB")) //9
  