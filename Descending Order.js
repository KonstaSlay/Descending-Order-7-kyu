/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/

function descendingOrder(n){
  let arr1 = String(n);     // Convert number to string  var string = num.toString()
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {     // I create an array of numbers
      arr2.push(parseInt(arr1[i]));
  };
  let result = "";
  let num = arr2.sort((a, b) => b - a);       // Sorting
  for (let i = 0; i < num.length; i++) {
    result += String(num[i]);                 // I convert each number of the array into a string and concatenate
  };
  return parseInt(result);                    // Convert string to number
}
alert(descendingOrder(1021));

/* Script from Codewars*/

/*function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}*/