const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 6;
      case 'wednesday':
        return 7;
      case 'thursday':
        return 9;
      case 'friday':
        return 3;
      case 'saturday':
        return 12;
      case 'sunday':
        return 12;
    }
  };
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours(8);
  
      if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
      } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');
      } else {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
      }
  };
  
  calculateSleepDebt();