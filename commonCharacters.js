
// commonCharacters function takes 2 strings and check for all the common
// characters between those 2 strings, if there is any common letter it should 
// be added to the final result as a string.

commonCharacters = function(string1, string2){
	var result = "";
	if(string1.length > string2.length){
		for(var i = 0; i <= string1.length; i++){
			if (string2.includes(string1[i])){
				result += string1[i];
			}
		}
	}else{
		for(var x = 0; x <= string2.length; x++){
			if (string1.includes(string2[x])){
				result += string2[x];
			}
		}
	}
	return result;
};
