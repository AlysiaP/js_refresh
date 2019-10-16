// Calculate object's mass throughout the universe. Weight is determined by the force of gravity on an object, so the same object would weight differently on different planets.
const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case 'Mercury':
            return earthWeight * .378;
        case 'Venus':
            return earthWeight * .907;
        case 'Mars':
            return earthWeight * .377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * .916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}

// If/Else version of Switch
// calculateWeight = (earthWeight, planet) => {
//   if (planet === 'Mercury') {
//     earthWeight *= .378;
//     return `On ${planet}, the Earth-weight would be ${earthWeight}`;
//   } else if (planet === 'Venus') {
//     earthWeight *= .907;
//     return `On ${planet}, the Earth-weight would be ${earthWeight}`;
//   } else if (planet === 'Mars') {
//     earthWeight *= .377;
//     return `On ${planet}, the Earth-weight would be ${earthWeight}`;
//   } else if (planet === 'Jupiter') {
//     earthWeight *= 2.36;
//     return `On ${planet}, the Earth-weight would be ${earthWeight}`;
//   } else if (planet === 'Saturn') {
//     earthWeight *= .916;
//     return `On ${planet}, the Earth-weight would be ${earthWeight}`;
//   } else {
//     return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
//   };
// }

console.log(calculateWeight(100, 'Jupiter'))
