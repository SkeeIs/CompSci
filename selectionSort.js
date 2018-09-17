function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;  
}

function selectionSort(items) {
  var len = items.length;
  var min;
  
  for (var i = 0; i < len; i++) {
    min = i;
    
    for (var j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;  
      }  
    }

    if (i !== min) {
      swap(items, i, min);  
    }
  }

  return items;
}