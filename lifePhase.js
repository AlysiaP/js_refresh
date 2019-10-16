// Takes in a person’s age and returns which phase of life they are in.
lifePhase = (age) => {
  if(age > 0 && age < 4) {
    return 'baby';
  } else if (age > 3 && age < 13) {
    return 'child';
  } else if (age > 12 && age < 20) {
    return 'teen';
  } else if (age > 19 && age < 65) {
    return 'adult';
  } else if (age > 64 && age < 141) {
    return 'senior citizen';
  } else {
    return 'This is not a valid age';
  }
}

console.log(lifePhase(4)) //should print 'child'
