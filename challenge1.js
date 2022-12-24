// Challenge: pluralize

function pluralize(array){
  let newArr = [];
  let addS = "s";
  
  newArr = array.map((element)=>{
		element = element + addS;
    return element;
  });
  return newArr;
}



const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]