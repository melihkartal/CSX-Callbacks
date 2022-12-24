// Create a function subtractTwo that accepts a number and returns that number minus 2.

// Then create a function map that takes two inputs -

//     an array of numbers (a list of numbers)
//     a 'callback' function - this function is applied to each element of the array (inside of the function 'map')

function subtractTwo (number){
    return number - 2;
  }
  
  function map(array,callback){
    let cache = new Array();
    for(let i = 0 ; i < array.length ; i++)
      cache.push(callback(array[i]));
    
    return cache;  
  }
  
  
  
  console.log(typeof subtractTwo); // should log: 'function'
  console.log(typeof map); // should log: 'function'
  console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]