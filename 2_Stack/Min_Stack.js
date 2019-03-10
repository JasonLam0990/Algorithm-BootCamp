// 解法对应于Leetcode 155 迷你型栈的实现

// 思路：构造函数会初始化两个数组，一个用来记录最小值的变化，实现getMin。一个就是实现栈的push，pop，top功能。

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.minStack = []
    this.container = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.container.push(x)
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let x = this.container.pop()
    if (this.minStack[this.minStack.length - 1] == x) {
        this.minStack.pop()
    }
    return x
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.container[this.container.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */