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

 function allAnagrams (str) {
 	var result = [];
 	var string1 = "";
 	var string2 = "";
 	for (var i = 0; i < str.length; i++) {
 		string1 = str[i];
 		string2 = str[i];
 		var str2 = str.replace(str[i], "");
 		for (var j = 0; j < str2.length; j++) {
 			string1 += str2[j];
 		}
 		str2 = str2.split("").reverse().join("");
 		for (var x = 0; x < str2.length; x++) {
 			string2 += str2[x]
 		}
 		result.push(string1);
 		result.push(string2);
 	}
 	return result;
 }