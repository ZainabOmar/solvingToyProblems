//trying to sort using recursion:
//var example = [2, 5, 10, 8];
function bubbleSort (arr){
var counter = 0;
	if(arr.length === 0 || arr.length === 1){
		console.log("Nothing To Sort");
		return arr;
	}
  for (var i = 0; i < arr.length; i++) {
	  var x = arr[i];
	  var y = arr[i+1];

	  if(arr[i]>arr[i+1]){
	  	counter++;
		  arr[i+1] = x;
		  arr[i] = y;
	  }
}
if(counter > 0){
	bubbleSort(arr);
}else {
	return arr;
}
return arr;
}


function selectionSort (arr){

var min = function (array){
	var minimum = array[0];
	for(var i = 0; i <= array.length; i++){
		if(minimum > array[i]){
			minimum = array[i];
		}
	}
	return minimum;
}

if(arr.length === 0 || arr.length === 1){
		console.log("Nothing To Sort");
		return arr;
}
	
  for (var i = 0; i < arr.length; i++) {
  	var slicedArr = arr.slice(i, arr.length);
  		var mini = min(slicedArr);
  		var index = arr.indexOf(mini);
  		var firstEle = arr[i];
  		arr[i] = mini;
  		arr[index] = firstEle;
  	}
return arr;
}


