

// No 1
const Input = [1, 2, 4, 0];
const input2 = ( 'w3resource');
console.log (Array.isArray (Input));
console.log (Array.isArray(input2));


//No 2
function cloneArray(array) {
    return array.slice(0);
}
  const orignalArray = [1, 2, [4, 0]];
  const clonedArray = cloneArray(orignalArray);
  console.log(orignalArray); 
  console.log(clonedArray);

  
//No 3
function first(arr, n = 1) {
  if (n >= 0) {
    return arr.slice(0, n);
  } else {
    return [];
  }
}
// Example usage:
console.log(first([7, 9, 0, -2]));       
console.log(first([], 3));              
console.log(first([7, 9, 0, -2], 3));      
console.log(first([7, 9, 0, -2], 6));       
console.log(first([7, 9, 0, -2], -3));  



// No 4
function getLastElements(arr, n) {
    if (n=== undefined) {
        return arr [arr.lenght -1];
    } else { return arr.slice ( -n);}
  }
    console.log(getLastElements ([7, 9, 0, -2]));
console.log( getLastElements([],3));
console.log( getLastElements ([7, 9, 0, -2],3));
console.log( getLastElements([7, 9, 0, -2],6));
console.log( getLastElements([7, 9, 0, -2],-3));


// No 5
const myColor = ["Red", "Green", "White", "Black"];
const commaSeparated = myColor.join(",");
console.log(commaSeparated); 


// NO 6
function insertDashes(number) {
    var numberString = number.toString();
    var result = '';
    for (var i = 0; i < numberString.length; i++) {
      result += numberString[i];
      if (numberString[i] % 2 === 0 && numberString[i + 1] % 2 === 0) {
        result += '-';
      }
    }
    return result;
  }
//   // Example usage
  var input = 025468;
  var output = insertDashes(input);
  console.log(output); // Output: 0-254-6-8
  

// NO 7
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function(a, b) {
  return a - b;
});
console.log(arr1.join(','));


// No 8
function findMostFrequentItem(arr) {
  let frequency = {};
  let maxCount = 0;
  let mostFrequentItem;
  // Count the occurrences of each item in the array
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    frequency[item] = (frequency[item] || 0) + 1;
    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequentItem = item;
    }
  }
  return `${mostFrequentItem} (${maxCount} times)`;
}
// Example usage:
const arr10 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const result12 = findMostFrequentItem(arr10);
console.log(result12); 


// No 9
function swapCase(str) {
    var swappedStr = '';
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      if (char === char.toLowerCase()) {
        swappedStr += char.toUpperCase();
      } else {
        swappedStr += char.toLowerCase();
      }
    }
    return swappedStr;
  }
  var input = 'The Quick Brown Fox';
  var output = swapCase(input);
  console.log(output);


// No 10
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < a[i].length; j++) {
    console.log(a[i][j]);
  }
}


// No 11
function sumOfSquares(vector) {
    let sum = 0;
    for (let i = 0; i < vector.length; i++) {
      sum += vector[i] * vector[i];
    }
    return sum;
  }
  // Example usage
  const numericalVector = [2, 3, 4, 5];
  const rsult = sumOfSquares(numericalVector);
  console.log(rsult);


// No 12
function computeSumAndProduct(array) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      product *= array[i];
    }
    return { sum, product };
  }
  // Example usage
  const integers = [2, 4, 6, 8];
  const result = computeSumAndProduct(integers);
  console.log("Sum:", result.sum);
  console.log("Product:", result.product);
  

// No 13
function addNewItem() {
    let arrayMsg = [];
    arrayMsg = [...arrayMsg, 'hello world!'];
    arrayMsg = [...arrayMsg, 'im from nigeria!']
    console.log(arrayMsg.join(', '))
}
addNewItem();


// No 14
function removeDuplicates(array) {
    const uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
      const currentItem = array[i].toLowerCase();
      if (!uniqueArray.includes(currentItem)) {
        uniqueArray.push(currentItem);
      }
    }
    return uniqueArray;
  }
  // Example usage
  const items = ["Apple", "banana", "apple", "Orange", "banana"];
  const uniqueItems = removeDuplicates(items);
  console.log(uniqueItems);


// No 15
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
console.log( 1 + ' 1st Choice is ' + color[0])
console.log( 2 + ' 2nd Choice is ' + color[1])
console.log( 3 + ' 3rd Choice is ' + color[0])


// No 16
function findLeapYears(startYear, endYear) {
    const leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYears.push(year);
      }
    }
    return leapYears;
  }
  // Example usage
  const startYear = 2000;
  const endYear = 2020;
  const leapYears = findLeapYears(startYear, endYear);
  console.log(leapYears);


  // No 17
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // Example usage
  const originalArray = [1, 2, 3, 4, 5];
  const shuffledArray = shuffleArray(originalArray);
  console.log(shuffledArray);


  // No 18
function binary_Search(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      return mid; // Found the target at index mid
    } else if (array[mid] < target) {
      low = mid + 1; // Target is in the right half
    } else {
      high = mid - 1; // Target is in the left half
    }
  }
  return -1; // Target not found
}
// Example usage
const tems = [1, 2, 3, 4, 5, 7, 8, 9];
const target = 5;
const index = binary_Search(tems, target);
console.log(binary_Search, 0);
console.log(binary_Search, 5);


// No 19
function computeSum(array1, array2) {
  const result = [];
  const maxLength = Math.max(array1.length, array2.length);
  for (let i = 0; i < maxLength; i++) {
    const value1 = array1[i] || 0;
    const value2 = array2[i] || 0;
    result.push(value1 + value2);
  }
  return result;
}
// Example usage
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
const sumArray = computeSum(array1, array2);
console.log(sumArray);



// No 20
function findDuplicates(array) {
  const duplicates = [];
  const visited = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (visited[element]) {
      if (!duplicates.includes(element)) {
        duplicates.push(element);
      }
    } else {
      visited[element] = true;
    }
  }
  return duplicates;
}
// Example usage
const array = [1, 2, 3, 4, 5, 2, 7, 3, 5];
const duplicateValues = findDuplicates(array);
console.log(duplicateValues);


// No 21
function flattenArray(array, shallow = false) {
  const flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && !shallow) {
      const nestedFlattened = flattenArray(array[i]);
      flattened.push(...nestedFlattened);
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened;
}
// Example usage
const nestedArray = [1, [2, [3, [4, 5], 6], 7], 8];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);


// No 22
function computeUnion(array1, array2) {
  const union = new Set([...array1, ...array2]);
  return Array.from(union);
}
// Example usage
const array11 = [1, 2, 3, 4, 5];
const array22 = [3, 4, 5, 6, 7];
const unionArray = computeUnion(array11, array22);
console.log(unionArray);


// N0 23
function findDifference(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const difference = [];

  for (let item of set1) {
    if (!set2.has(item)) {
      difference.push(item);
    }
  }
  for (let item of set2) {
    if (!set1.has(item)) {
      difference.push(item);
    }
  }
  return difference;
}
// Example usage
const array111 = [1, 2, 3, 4, 5];
const array222 = [3, 4, 5, 6, 7];
const differenceArray = findDifference(array111, array22);
console.log(differenceArray);


// No 24
function removeFalsyValues(array) {
  return array.filter(item => ![null, 0, "", false, undefined, NaN].includes(item));
}
// Example usage
const arry = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const filteredArray = removeFalsyValues(arry);
console.log(filteredArray);


// No 25
function sortByTitle(array) {
  return array.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) {
      return -1;
    } else if (titleA > titleB) {
      return 1;
    } else {
      return 0;
    }
  });
}
// Example usage
var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    libraryID: 3245,
  },
];
var sortedLibrary = sortByTitle(library);
console.log(sortedLibrary);


// No 26
function findPair(numbers, target) {
  const indices = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        indices.push(i, j);
        return indices;
      }
    }
  }
  return indices;
}
// Example usage
const numbers = [10, 23, 10, 40, 50, 60, 70];
const taret = 50;
const pairIndices = findPair(numbers, taret);
console.log(pairIndices);


// No 27
function getPropertyValues(array, property) {
  return array.map(item => item && item[property]);
}
// Example usage
const rray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const propertyValues = getPropertyValues(rray, 'propertyName');
console.log(propertyValues);


// No 28
function longestCommonStartingSubstring(strings) {
  if (strings.length === 0) {
    return '';
  }
  const firstString = strings[0];
  let longestSubstring = '';
  for (let i = 0; i < firstString.length; i++) {
    const substring = firstString.slice(0, i + 1);
    if (strings.every(str => str.startsWith(substring))) {
      longestSubstring = substring;
    } else {
      break;
    }
  }
  return longestSubstring;
}
// Example usage
const strings = ['go', 'google'];
const resut = longestCommonStartingSubstring(strings);
console.log(resut);


// No 29
function fillArray(start, end) {
  const array = [];
  if (typeof start === 'number' && typeof end === 'number') {
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
  } else if (typeof start === 'string' && typeof end === 'string' && start.length === 1 && end.length === 1) {
    const startCharCode = start.charCodeAt(0);
    const endCharCode = end.charCodeAt(0);
    for (let charCode = startCharCode; charCode <= endCharCode; charCode++) {
      const char = String.fromCharCode(charCode);
      array.push(char);
    }
  }
  return array;
}
// Example usage for numeric values
const numericArray = fillArray(1, 5);
console.log(numericArray);
// Example usage for string values
const characterArray = fillArray('a', 'e');
console.log(characterArray);


// No 30
function mergeArrays(array1, array2) {
  const mergedArray = array1.concat(array2);
  const uniqueArray = [...new Set(mergedArray)];
  return uniqueArray;
}
// Example usage
const aray1 = [1, 2, 3];
const aray2 = [2, 30, 1];
const mergedArray = mergeArrays(aray1, aray2);
console.log(mergedArray);


// No 31
function removeElement(array, element) {
  const index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}
// Example usage
const ary = [1, 2, 3, 4, 5];
const element = 3;
const reslt = removeElement(ary, element);
console.log(reslt);


// No 32
function contains(arr, element) {
  return arr.includes(element);
}
// Example usage
const arr = [2, 5, 9, 6];
console.log(contains(arr, 5));


// No 33
var originaArray = [1, 2, 3, 4, 5];
var newArray = originaArray.slice(0);
originalArray.length = 0;
console.log(originalArray);  // Output: []
console.log(newArray);       // Output: [1, 2, 3, 4, 5]


// No 34
function nthLargest(arr, n) {
  // Sort the array in descending order
  const sortedArray = arr.sort((a, b) => b - a);
  // Return the nth largest element
  return sortedArray[n - 1];
}
// Example usage
const ar = [43, 56, 23, 89, 88, 90, 99, 652];
const n = 4;
console.log(nthLargest(ar, n));


// No 35
function getRandomItemsFromArray(array, count) {
  const randomItems = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    randomItems.push(array[randomIndex]);
  }
  return randomItems;
}
// Example usage
const aray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const count = 4;
const randomItems = getRandomItemsFromArray(aray, count);
console.log(randomItems);


// No 36
function arrayFilled(count, value) {
  return Array(count).fill(value);
}
// Example usage
const result1 = arrayFilled(3, 'default value');
console.log(result1);
const result2 = arrayFilled(4, 'password');
console.log(result2);


// No 37
function arrayFilled(count, value) {
  return Array(count).fill(value);
}
// Example usage
console.log(arrayFilled(6, 0));
console.log(arrayFilled(4, 11));


// No 38
function move(arr, fromIndex, toIndex) {
  // Validate input indices
  if (fromIndex < 0 || fromIndex >= arr.length || toIndex < 0 || toIndex >= arr.length) {
    console.log('Invalid index!');
    return arr; // Return the array as is
  }
  // Remove the element from the original position
  const element = arr.splice(fromIndex, 1)[0];
  // Insert the element at the new position
  arr.splice(toIndex, 0, element);
  return arr;
}
// Example usage
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));


// No 39
function filter_array_values(arr) {
  return arr.filter(value => {
    // Exclude false, null, 0, and empty strings
    if (value === false || value === null || value === 0 || value === '') {
      return false;
    }
    return true;
  });
}
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));


// No 40
function array_range(start, length) {
  return Array.from({ length }, (_, index) => start + index);
}
console.log(array_range(1, 4));   // [1, 2, 3, 4]
console.log(array_range(-6, 4));  // [-6, -5, -4, -3]



// No 41
function rangeBetween(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
console.log(rangeBetween(4, 7)); // [4, 5, 6, 7]
console.log(rangeBetween(-4, 7)); // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]


// No 42
function difference(arr1, arr2) {
  const uniqueElements = new Set();

  // Add elements from arr1 to the set
  arr1.forEach((element) => {
    uniqueElements.add(String(element));
  });

  // Add elements from arr2 to the set
  arr2.forEach((element) => {
    // Flatten nested arrays before adding to the set
    if (Array.isArray(element)) {
      flattenArray(element).forEach((nestedElement) => {
        uniqueElements.add(String(nestedElement));
      });
    } else {
      uniqueElements.add(String(element));
    }
  });
  // Convert the set back to an array and sort it
  const sortedUniqueElements = Array.from(uniqueElements).sort();
  return sortedUniqueElements;
}
// Function to flatten a nested array
function flattenArray(arr) {
  return arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flattenArray(next) : next), []);
}
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); // ["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["1", "2", "3", "10", "100"]


// No 43
function unzip(arr) {
  const maxLength = Math.max(...arr.map((subArray) => subArray.length));
  const unzippedArray = [];

  for (let i = 0; i < maxLength; i++) {
    unzippedArray.push(arr.map((subArray) => subArray[i]));
  }
  return unzippedArray;
}
console.log(unzip([['a', 1, true], ['b', 2, false]]));
console.log(unzip([['a', 1, true], ['b', 2]]));


// No 44
function indexOn(arr, keySelector) {
  const result = {};
  arr.forEach((item) => {
    const key = keySelector(item);
    const value = Object.assign({}, item);
    delete value[key];
    result[key] = value;
  });
  return result;
}
const inputArray = [
  { id: 10, name: 'apple' },
  { id: 20, name: 'orange' },
];
const outputObject = indexOn(inputArray, (x) => x.id);
console.log(outputObject);


// No 45
function findUniqueValues(numbers) {
  const uniqueValues = [...new Set(numbers)];
  return uniqueValues;
}
console.log(findUniqueValues([1, 2, 2, 3, 4, 4, 5]));
console.log(findUniqueValues([1, 2, 3, 4, 5]));
console.log(findUniqueValues([1, -2, -2, 3, 4, -5, -6, -5]));


// No 46
function permutations(arr) {
  if (arr.length === 1) {
    return [arr];
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const remainingElements = arr.filter((_, index) => index !== i);
    const remainingPermutations = permutations(remainingElements);
    for (let j = 0; j < remainingPermutations.length; j++) {
      result.push([currentElement, ...remainingPermutations[j]]);
    }
  }
  return result;
}
console.log(permutations([1, 33, 5]));
console.log(permutations([1, 3, 5, 7]));
console.log(permutations([2, 4]));


// No 46
function permutations(arr) {
  if (arr.length === 1) {
    return [arr];
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const remainingElements = arr.filter((_, index) => index !== i);
    const remainingPermutations = permutations(remainingElements);
    for (let j = 0; j < remainingPermutations.length; j++) {
      result.push([currentElement, ...remainingPermutations[j]]);
    }
  }
  return result;
}
console.log(permutations([1, 33, 5]));
console.log(permutations([1, 3, 5, 7]));
console.log(permutations([2, 4]));


// No 47
function removeFalseValues(data) {
  if (Array.isArray(data)) {
    return data.filter((value) => value !== false);
  }
  if (typeof data === 'object' && data !== null) {
    const result = {};
    Object.entries(data).forEach(([key, value]) => {
      if (value !== false) {
        result[key] = removeFalseValues(value);
      }
    });
    return result;
  }
  return data;
}
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: '',
  g: 'a',
  h: [null, false, '', true, 1, 'a'],
  i: { j: 0, k: false, l: 'a' },
};
const reult = removeFalseValues(obj);
console.log(JSON.stringify(reult));


// No 48
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function checkAllPrimes(arr) {
  const allPrimes = arr.every(isPrime);
  return allPrimes;
}
const array_1 = [2, 3, 5, 7];
const array_2 = [2, 3, 5, 7, 8];
console.log("Original array of integers: " + array_1.join(","));
console.log("In the said array, check if every number is prime or not! " + checkAllPrimes(array1));
console.log("Original array of integers: " + array_2.join(","));
console.log("In the said array, check if every number is prime or not! " + checkAllPrimes(array2));


// No 49
function findThirdSmallestNumber(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[2];
}
const a_rray1 = [2, 3, 5, 7, 1];
const a_rray2 = [2, 3, 0, 5, 7, 8, -2, -4];
console.log("Original array of numbers: " + a_rray1.join(","));
console.log("Third smallest number of the said array of numbers: " + findThirdSmallestNumber(array1));
console.log("Original array of numbers: " + a_rray2.join(","));
console.log("Third smallest number of the said array of numbers: " + findThirdSmallestNumber(array2));


// No 50
function calculateSumOfNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sum += array[i];
    }
  }
  return sum;
}
const arra_y1 = [2, "11", 3, "a2", false, 5, 7, 1];
const arra_y2 = [2, 3, 0, 5, 7, 8, true, false];
console.log("Original array: " + arra_y1.join(","));
console.log("Sum of all numbers in the array: " + calculateSumOfNumbers(array1));
console.log("Original array: " + arra_y2.join(","));
console.log("Sum of all numbers in the array: " + calculateSumOfNumbers(array2));


// No 51
function isFactorChain(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] % array[i - 1] !== 0) {
      return false;
    }
  }
  return true;
}
const array10 = [2, 4, 8, 16, 32];
const array20 = [2, 4, 16, 32, 64];
const array3 = [2, 4, 16, 32, 68];
console.log("Original array: " + array10.join(","));
console.log("Check if the said array is a factor chain or not?");
console.log(isFactorChain(array10));
console.log("Original array: " + array2.join(","));
console.log("Check if the said array is a factor chain or not?");
console.log(isFactorChain(array20));
console.log("Original array: " + array3.join(","));
console.log("Check if the said array is a factor chain or not?");
console.log(isFactorChain(array3));


// No 52
function getNaNIndexes(array) {
  const indexes = [];
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      indexes.push(i);
    }
  }
  return indexes;
}
const array01 = [2, NaN, 8, 16, 32];
const array02 = [2, 4, NaN, 16, 32, NaN];
const array30 = [2, 4, 16, 32];
console.log("Original array: " + array01.join(","));
console.log("Find all indexes of NaN in the array: " + getNaNIndexes(array1).join(","));
console.log("Original array: " + array02.join(","));
console.log("Find all indexes of NaN in the array: " + getNaNIndexes(array2).join(","));
console.log("Original array: " + array30.join(","));
console.log("Find all indexes of NaN in the array: " + getNaNIndexes(array3).join(","));


// No 53
function countArrays(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      count++;
    }
  }
  return count;
}

const array001 = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
const array002 = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];

console.log("Number of arrays inside the said array: " + countArrays(array001));
console.log("Number of arrays inside the said array: " + countArrays(array002));
