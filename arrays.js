var chocolateBars = ['snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

var newArray;

addElementToBeginningOfArray(array, element){
  newArray = array.unshift(element);
  return newArray;
}


destructivelyAddElementToBeginningOfArray(array, element){
  array = ...array;
  return array;
}

addElementToEndOfArray(array, element){
  newArray = array.push(element);
  return newArray;
}

destructivelyAddElementToEndOfArray(array, element){
  array = array.push(element);
  return array;
}

accessElementInArray(array, index){
  
}