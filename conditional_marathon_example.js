let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
let runnerAge = 18;

if (runnerAge < 18) {
} else {
  raceNumber += 1000;
}

if (runnerAge >= 18 && earlyRegistration === true) {
	console.log(`You will race at 9:30 am and have the race number of ${raceNumber}`);
} else if (runnerAge >= 18 && earlyRegistration === false) {
  console.log(`Late adults run at 11:00 am and have the race number of ${raceNumber}`);
} else if (runnerAge < 18) {
	console.log(`Youth registrants run at 12:30 pm (regardless of registration) and will have the raceNumber of ${raceNumber}`);
}