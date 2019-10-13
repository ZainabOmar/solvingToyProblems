// Given an arbitrary input string, return the first non-repeating character.
// For strings with all repeats, return 'sorry'.

// example: 
// firstNonRepeatedCharacter("ABCDBIRDUP") --> "A"
// firstNonRepeatedCharacter("XXXXXXX") --> "sorry"
// firstNonRepeatedCharacter("BABA") --> "sorry"

function firstNonRepeatedCharacter(string) {
	var arr = [];
	for (var i = 0; i < string.length; i++) {
		var str = new RegExp(string[i], "gi");
		// var sym = new RegExp("/-[]/{}()*+?.\^$|/:");
		arr.push(string[i], (string.match(str) || []).length);
	}
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === 1){
			return arr[i-1];
		}
	}
	return "Sorry";
}

// function escapeRegExp(str) {
//   return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
// }