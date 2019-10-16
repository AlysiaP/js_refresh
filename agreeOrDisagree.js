// Takes in two strings and returns whether you agree or disagree depending on if the two strings are different
agreeOrDisagree = (first, second) => {
  if (first === second) {
    return "You agree!";
  } else if (first !== second) {
    return "You disagree!";
  }
};

console.log(agreeOrDisagree("yep", "yep")) // Should print 'You agree!'
