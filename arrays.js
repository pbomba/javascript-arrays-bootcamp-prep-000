var chocolateBars = ['snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

var newArray = chocolateBars;

function addElementToBeginningOfArray(array, element){
  var arrayB = array.slice(0);
  arrayB.unshift(element);
  return arrayB;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var arrayB = array.slice(0);
  arrayB.push(element);
  return arrayB;
}
/*
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
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array = array.slice(0, array.length -1);
  return array
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length -1);
  return array;
}

*/