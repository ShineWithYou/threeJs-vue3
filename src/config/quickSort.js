// 快速排序方法 使用指针
function quickSort(arr) {
  // 数组长度不大于1时，没有必要进行排序操作
  if (arr.length <= 1) {
    return arr;
  }
  // 找到一个基准值，这里找的是数组的中位数
  const middleIndex = Math.floor(arr.length / 2);
  // 设置左数组以及右数组
  const left = []
  const right = []
  // 循环数组
  for (let i = 0; i <= arr.length; i++) {
    // 当循环下标全等于基准值时，不做操作，继续执行
    if (i === middleIndex) {
      continue
    }
    // 小于基准数的值放入左数组
    if (arr[i] < arr[middleIndex]) {
      left.push(arr[i])
    }
    // 大于基准数的值放入右数组
    if (arr[i] > arr[middleIndex]) {
      right.push(arr[i])
    }
  }
  // 将左数组、基准值和右数组整合在一块儿
  return [...quickSort(left), arr[middleIndex], ...quickSort(right)]
}

export {
  quickSort
}