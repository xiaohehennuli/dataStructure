/** 顺序表的删除操作
 *
 */
const data = [1, 2, 3, 8, 9, 10, 12]

// 因为顺序表在逻辑结构和物理结构上都是连续的,所以找到要删除的元素的位置，后续元素依次覆盖前面元素

function deleteSequence(seq, index) {
  if (index > seq.length - 1) {
    return false
  }
  for (let i = index; i <= seq.length - 1; i++) {
    data[i - 1] = data[i]
  }
  //数组长度减一
  data.length--
}

// 复杂度o(n)

deleteSequence(data, 1)

console.log(data)
