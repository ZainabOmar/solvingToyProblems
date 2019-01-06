/**
 * Given a single input string, write a function that outputs an array of
   strings with every possible combination of letters.
 
 * At first, don't worry about repeated (duplicate) strings.
 
 * What time complexity is your solution?
 
 * Extra credit: De-duplicate your return array without using uniq().

 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */
 function swap (arr, a, b) {
 	var temp = arr[a];
 	arr[a] = arr[b];
 	arr[b] = temp;
 	return arr;
 }
 function allAnagrams (str) {
 	var result = new Array();
 	str=str.split("");
 	for (var i = 0; i < str.length; i++) {
 		for (var j = 0; j < str.length; j++) {
 			var element = swap(str, i, j).join("");
 			if(!result.includes(element)){
 				result.push(element)
 			}
 		}
 	}
 	return result;
 }
