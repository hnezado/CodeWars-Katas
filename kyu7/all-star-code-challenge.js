// This Kata is intended as a small challenge for my students

// For fun you've recreated your real life friends as Javascript Friend objects. But with so many new friends, keeping individual Friend objects is becoming cumbersome. You would prefer to have 1 large object containing all of your Friend objects, which you currently have stored in a simple array.

// Create a function named combineFriends(), that takes one array argument of Friend objects and outputs 1 object with each Friend contained within it. Each Friend object has an "id" key with a unique number value; the function should use that value as a key for the output object with it's value being the Friend object itself.

// Since the "id" in each friend is now redundant, it should not be contained in any of the output Friend objects.

// *Note:
// Friend objects will ALWAYS have an "id" key with a unique number value
// The "id" key should NOT be carried over in any of the Friend objects *

function combineFriends(array){
    const friends = {}
    array.forEach((friend)=>{
      const id = friend.id
      friends[id] = friend
      delete friends[id].id
    })
    return friends
  }