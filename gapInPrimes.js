// The prime numbers are not regularly spaced. 
//For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. 
//From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes:
// 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

// A prime gap of length n is a run of n-1 consecutive composite
// numbers between two successive primes 
//(see: http://mathworld.wolfram.com/PrimeGaps.html).

// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer > 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or
// {3, 5} which is the first pair between 3 and 50 with a 2-gap.

// So this function should return the first pair of two prime numbers
// spaced with a gap of g between the limits m, n if these numbers exist
// otherwise nil or null or None or Nothing (depending on the language).

// In C++ return in such a case {0, 0}. In F# return [||]

// #Examples: gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}

// gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]

// gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

// ([193, 197] is also such a 4-gap primes between 130 
//and 200 but it's not the first pair)

// gap(6,100,110) --> nil or {0, 0} : 
//between 100 and 110 we have 101, 103, 107, 109 but 101-107
//is not a 6-gap because there is 103in between and 103-109
//is not a 6-gap because there is 107in between.

function gap(g, m, n) {
	var arr = [];
	var result = [];
	
	//we need a function to check for all the prime numbers.
	//(will be used later in for loop) 
	var isPrime = function (n) {
		for (var i = 2; i < n; i++) {
			if (n%i === 0) {
				return false;
			}
		}
		return true;
	}

// find out the prime numbers and save them in an array.
for (var i = m; i<=n; i++) {
	if (isPrime(i)) {
		arr.push(i);
	}
}

// saving the adjacent prime numbers in to groups.
for (var t = 0; t < arr.length-1; t++) {
	var temp = arr[t];
	arr[t] = [temp, arr[t+1]]
}

// to handle the array with groups only we pop the last element from the array.
arr.pop();

// check the gap with the difference between the numbers in each group.
for (var j = 0; j < arr.length; j++) {
	if (g === arr[j][1]-arr[j][0]) {
		result.push(arr[j][0], arr[j][1])
	}
}

// if there were no match then there is no result.
if(result.length === 0){
	return null;
}

//otherwisw there should be a result,
//if there were more than one match then just bring the first one.
if (result.length > 2) {
	result.splice(2)
}
return result;
}






