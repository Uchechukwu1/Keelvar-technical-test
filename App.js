/*  Given a list of integers, check if the sum of any two integers in the list is not contained in the list.
For example with the list [4, 5, 15, 2, 8], there is no pair of integers where their sum is in the list.
The list [8, 7, 5, 3] does not satisfy the criteria since the sum of 5 and 3 is in the list.
Write a Javascript function which takes a list of integers and returns True if the list satisfies the criteria above, or False otherwise.*/

//test array function
function testArray(listOfIntegers) {
  const sum = {}; // for remebering what we have added.
  const seen = {}; // for remembering what we have seen.
  for (let i = 0; i < listOfIntegers.length; i++) {
    const item = listOfIntegers[i];
    if (sum[item]) return true;
    let count = i - 1;
    while (count >= 0) {
      const interim = listOfIntegers[count] + item; // sum current and previous values.
      if (seen[interim]) return true;
      sum[interim] = 1; //  remember sum.
      count--;
    }
    seen[item] = 1; // remember that we have seen item.
  }
  return false;
}

console.log(testArray([7, 3, 4, 6, 1])); // true
console.log(testArray([11, 7, 33, 6, 8])); // false
