/** 顺序表的插入操作
 */

const data = [2, 5, 7, 8, 9, 10]

function insertSequence(seq, index, data, maxSize = 10) {
  // 如果插入的下标
  if (index > maxSize) {
    return false
  }
  for (let i = seq.length; i >= index; i--) {
    seq[i] = seq[i - 1]
  }
  seq[index - 1] = data
}

// 时间复杂度O(n)
insertSequence(data, 2, 3)

console.log(data)
