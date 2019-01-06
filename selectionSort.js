// Selection Sort
// The selection sort algorithm sorts an array by repeatedly finding the minimum 
// element (considering ascending order) from unsorted part and putting it at the beginning. 
//The algorithm maintains two subarrays in a given array.

// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.

// In every iteration of selection sort, the minimum element (considering ascending order) 
//from the unsorted subarray is picked and moved to the sorted subarray.

function selectionSort (array){
	var result = [];

	function sort (arr){
		var min = array[0];
		for(var i = 0; i < arr.length; i++){
			if(arr[i] < min){
				min = arr[i];
			}
		}
		result.push(min);
		arr.splice(arr.indexOf(min), 1)
		if(!arr.length){
			return result;
		}
		return sort(arr);
	}
	
	return selectionSort(array);
}




