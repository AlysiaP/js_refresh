// A person's number of imaginary friends
numImaginaryFriends = (totalFriends) => {
  return Math.round(totalFriends * .33);
};

console.log(numImaginaryFriends(18)) // Should print 6
