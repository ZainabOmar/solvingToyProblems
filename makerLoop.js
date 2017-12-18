/*
The makeLooper() function takes a string (of non-zero length) as an argument. 
It returns a function. The function it returns will return successive characters
of the string on successive invocations. It will start back at the beginning of the string
once it reaches the end.
For example:
var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call
*/

function makeLooper(str) {
	var result = {};
	result.next = next;
	result.str = str;
	result.index = 0;

	return result;
}

function next(){
	console.log(this)
	if(this.index === this.str.length){
		this.index=0;
	}
	this.string = this.str[this.index];
	this.index++;
	return this.string;
}