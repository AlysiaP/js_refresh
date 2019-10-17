/*

Write your function where it returns how old someone who is currently that age was (or will be) during that year handle three different cases handling three different cases:

1. If the year is in the future, you should return string: 'You will be [calculated age] in the year [year passed in]'

2. If the year is before they were born, you should return string: 'The year [year passed in] was [calculated nubmer of years] years before you were born'

3. If the year is in the past but not before the person was born, return string: 'You were [calculated age] in the year [year passed in]'

*/

howOld = (age, year) => {
  let theCurrentYear = new Date().getFullYear();
  const yearDifference = year - theCurrentYear;
  const newAge = age + yearDifference;
  
  if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  } else if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
}

// Testing results
console.log(howOld(25, 1980));
