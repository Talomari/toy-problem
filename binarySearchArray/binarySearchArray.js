/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
  var min = 0;
  var max= array.length-1 ;

  while(min<=max){
  	var res=Math.floor((min+max)/2)
  	if(array[res]===target){
  		return res
  }else if(array[res]< target){
    min=res+1;
  }else 
  	max=res-1
  }
  return ("the target is not found")
};

