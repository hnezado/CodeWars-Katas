// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

const toLetters = (num)=>{
  switch(num){
    case 10:
      return 'A'
      break
    case 11:
      return 'B'
      break
    case 12:
      return 'C'
      break
    case 13:
      return 'D'
      break
    case 14:
      return 'E'
      break
    case 15:
      return 'F'
      break
    default:
      throw new Error(`Input: ${num}. Enter numbers 10-15`)
  }
}

function rgb(r, g, b){
  let red = r, green = g, blue = b
  if (r<0) red = 0
  if (r>255) red = 255
  if (g<0) green = 0
  if (g>255) green = 255
  if (b<0) blue = 0
  if (b>255) blue = 255
  const chars = {
    char1: Math.floor(red/16),
    char2: Math.floor(red%16),
    char3: Math.floor(green/16),
    char4: Math.floor(green%16),
    char5: Math.floor(blue/16),
    char6: Math.floor(blue%16)
  }
  for (char in chars){
    if (chars[char] >= 10){
      chars[char] = toLetters(chars[char])
    }
  }
  return Object.values(chars).join('')
}

rgb(148, 0, 211) // '9400D3'
