var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var chocBars = [element, ...chocolateBars]
  return chocBars
}
