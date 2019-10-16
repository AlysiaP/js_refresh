// Takes a number and returns true or false depending on age value
canIVote = (age) => {
  if(age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(canIVote(12));
