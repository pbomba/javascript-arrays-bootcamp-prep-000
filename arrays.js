var chocolateBars = ['snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

var newArray = chocolateBars;

function addElementToBeginningOfArray(array, element){
  newArray = array.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = ...array;
  return array;
}

function addElementToEndOfArray(array, element){
  newArray = array.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array = array.push(element);
  return array;
}

function accessElementInArray(array, index){
  console.log(array[index]);
}

function estructivelyRemoveElementFromBeginningOfArray(array){
  array.slice(1);
  return array;
}

function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array = array.slice(0, array.length -1);
  return array
}

function removeElementFromEndOfArray(array){
  newArray = array.slice(0, array.length -1);
  return newArray;
}

