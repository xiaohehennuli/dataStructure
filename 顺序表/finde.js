/** 顺序表查找
 */

const data = [3, 4, 32, 32, 11, 2, 3]

// 按值查找
function findeSeqByValue(data, value) {
  for (let i = 0; i <= data.length; i++) {
    if (data[i] === value) {
      return i + 1
    }
  }
  return false
}

// 按下标查找

function findeSeqByIndex(data, index) {
  return data[index]
}

// O(n)
console.log(findeSeqByValue(data, 32))

//o(1)
console.log(findeSeqByIndex(data, 0))
