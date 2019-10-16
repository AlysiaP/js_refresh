// finalGrade takes 3 arguements, finds the average, validates values, checks which letter grade individual has 
finalGrade = (grade1, grade2, grade3) => {
  let grades = [grade1, grade2, grade3];
  let sum = grade1 + grade2 + grade3;
  let average = sum / grades.length;
  
  if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
    return 'You have entered an invalid grade.'
  } else if (average > 0 && average < 60) {
    return 'F';
  } else if (average > 59 && average < 70) {
    return 'D';
  } else if (average > 69 && average < 80) {
    return 'C';
  } else if (average > 79 && average < 90) {
    return 'B';
  } else if (average > 89 && average < 101) {
    return 'A';
  }
}

console.log(finalGrade(99, 92, 95)) // Should print 'A'
