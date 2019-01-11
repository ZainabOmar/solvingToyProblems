/*
We have too many cans of coca-cola, fanta, and sprite in the kitchen. 
Let's build a pyramid out of them!
A pyramid will square the number of cans in each level:
1 can in the top level, 
4 in the second, 
9 in the next, 
16, 
25,
36
49
64
81
100
121
144
169
196
225
256
...
Complete the pyramid function to return the number of complete levels of a can pyramid you can make,
given the number of cans
For example:
pyramid(750); // should === 12
pyramid(1666); // should === 16
*/

function pyramid (cans) {
	var temp = "";
	var index1 = 1;
	var index2 = 1;
	for (var i = 0; i < cans; i+=index2) {
		index2 = Math.pow(index1, 2)
		temp += index2 + '\n';
		index1++;
	}
	return temp;
}






