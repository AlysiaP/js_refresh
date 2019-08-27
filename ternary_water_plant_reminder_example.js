const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

//removed the () from day, removed {}; from const body and removed return
const plantNeedsWater = day => day === 'Wednesday' ? true : false;