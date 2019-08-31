// Create two followers list to compare to one another and list out in mutualFollowers array
const bobsFollowers = ['Jim', 'Joe', 'Jerry', 'John'];
const tinasFollowers =['Jessica','Jim', 'Joe'];
const mutualFollowers = [];

// Nested for loops to loop through each array item within other array
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    //console log displaying how each array is being compared via the nested for loops above
    //console.log(i, j, bobsFollowers[i], tinasFollowers[j]);
    if (bobsFollowers[i] === tinasFollowers[j]) {
      //add each matching follower to the mutual followers list to only isolate those individuals
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// Final result
console.log(mutualFollowers)

