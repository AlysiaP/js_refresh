// Calculate sleep hours per day
const getSleepHours = day => {
  if(day === 'monday') {
		return 8;
  } else if(day === 'tuesday') {
    return 8;
  } else if(day === 'wednesday') {
    return 8;
  } else if(day === 'thursday') {
    return 8;
  } else if(day === 'friday') {
    return 8;
  } else if(day === 'saturday') {
    return 8
  } else {
    return 5;
  }
};

// Test the getSleepHours function
// console.log(getSleepHours('tuesday'));

// Recorded actual hours of sleep concatonated together
const getActualSleepHours = () => {
  let actualHours =
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
  return actualHours;
};

//Alternative getActualSleepHours(); to shorten code
//const getAcutalSleepHours = () => 6+7+9+8+5+10+11;

// Ideal hours of sleep
const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
}

//Alternative getIdealSleepHours(); to shorten code
//const getIdealSleepHours = idealHours => idealHours * 7;

//Test actualHours results
console.log(getActualSleepHours());

//Test idealHours results
console.log(getIdealSleepHours());

// Comparing results to feedback requested to prompt in console
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
  	console.log('Good sleeping patterns');
	} else if (actualSleepHours > idealSleepHours) {
  	console.log('Getting a little extra sleep I see');
	} else {
  	console.log('Make sure your getting enough sleep');
	}
};

// Results
calculateSleepDebt();
