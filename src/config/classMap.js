// 定义一个Map类 即字典
class newMap {
  constructor() {
    this.data = {}
    this.count = 0
  }
  // 添加
  add(key, val) {
    if(!this.data[key]) {
      this.count++
      this.data[key] = val
    }
    return true
  }
  // 删除
  remove(key) {
    if (this.data[key]) {
      delete this.data[key]
      this.count--
    }
    return true
  }
  // 更新
  update(key, newVal) {
    if (this.data[key]) {
      this.data[key] = newVal
    } else {
      this.add(key, newVal)
    }
    return true
  }
  // 查找
  find(key) {
    return this.data[key]
  }
  // 清空
  clear() {
    this.data = {}
    this.count = 0
  }
  // 展示所有内容
  showAll() {
    Object.keys(this.data).forEach(key => {console.log(`${key}: ${this.data[key]}`)})
  }
  // 字典总个数
  total() {
    return this.count
  }
  // 判断是否存在
  has(key) {
    return !!this.data[key]
  }
  // 排序
  sort() {
    let result = {}
    Object.keys(this.data).sort().forEach(key => {
      result[key] = this.data[key]
    })
    this.data = result
  }
}

export default newMap