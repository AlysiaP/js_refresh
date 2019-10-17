// Create a function that represents the quality of the service received to the tip amount from the total
tipCalculator = (quality, total) => {
  switch (quality) {
    case 'bad':
        return total *= .05;
    case 'ok':
        return total *= .15;
    case 'good':
        return total *= .2;
    case 'excellent':
        return total *= .3;
    default:
        return total *= .18;
  }
};

// Test logic
console.log(tipCalculator('good', 100));
