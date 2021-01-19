var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var chocBars = [element, ...chocolateBars]
  return chocBars
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var chocBars = [...chocolateBars, element]
  return chocBars
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
