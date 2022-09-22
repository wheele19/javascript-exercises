const sumAll = function(arg1, arg2) {
    let sum = 0; 

  if (arg1 < 0 || arg2 < 0) return 'ERROR';
  if (!Number.isInteger(arg2) || !Number.isInteger(arg1)) return 'ERROR';
  
  if (arg1 > arg2) { 
    let length = arg1; 
    for (i = length; i >= arg2; i--) {

        sum = sum + i;

    }
    return sum;

  }
  else if (arg2 > arg1) { 
    let length = arg2; 
    for (i = length; i >= arg1; i--) {

        sum = sum + i;

    }
    return sum;

  }
  else if (arg1 = arg2)
    {
      return sum = arg1;
    }
};


// Do not edit below this line
module.exports = sumAll;
