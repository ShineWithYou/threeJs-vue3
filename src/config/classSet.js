// 定义一个集合类
class newSet {
  constructor() {
    this.data = []
  }
  // 增加
  add(val) {
    if(!this.data.includes(val)) {
      this.data.push(val)
    }
  }
}