var myArray = [5, 2, 1];

function bubbleSort(array) {
  var swapped = false;

  array.forEach((element, index, array) => {
    if (array[index] > array[index + 1]) {
      [array[index], array[index + 1]] = [array[index + 1], array[index]];
      swapped = true;
    }
  });

  if (swapped) {
    return bubbleSort(array);
  }

  return array;
}

function mergeSort(ary) {
  if (ary.length <= 1) {
    return ary;
  }

  var middle = Math.floor(ary.length / 2);
  var left = ary.slice(0, middle);
  var right = ary.slice(middle, ary.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, ary);
}

function merge(left, right, ary) {
  console.log(left, right, ary)
  var leftIndex = 0;
  var rightIndex = 0;
  var outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      ary[outputIndex++] = left[leftIndex++];
    } else {
      ary[outputIndex++] = right[rightIndex++];
    }
  }

  for (var i = leftIndex; i < left.length; i++) {
    ary[outputIndex++] = left[i];
  }

  for (var i = rightIndex; i < right.length; i++) {
    ary[outputIndex++] = right[i];
  }

  return ary;
}

function quickSort(array, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  if (start >= end) {
    return array;
  }

  var middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);

  return array;
}

function partition(array, start, end) {
  var pivot = array[end - 1];
  var j = start;

  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      [array[i], array[j]] = [array[i], array[j]];
      j++;
    }
  }

  [array[end - 1], array[j]] = [array[j], array[end - 1]];
qui  return j;
}


















//
