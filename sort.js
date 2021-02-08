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

//var flag = true;
// debugger;
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
  	for(var t = 0; t <= slicedArr.length; t++){
  		var mini = min(slicedArr);
  		var index = slicedArr.indexOf(mini);
  		var firstEle = slicedArr[0];
  		console.log(slicedArr);
  		console.log(index, mini, firstEle);
  		console.log(arr);
  		arr[i] = mini;
  		arr[index] = firstEle;
  	}
  }

return arr;
}


