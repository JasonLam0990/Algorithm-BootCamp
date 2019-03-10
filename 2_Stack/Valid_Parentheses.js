// 解法对应于Leetcode 20 括号匹配

// 解法一：映射+栈

// 思路：如果新读入的是右括号，则拿一个栈顶元素出来匹配，如果匹配，则继续读入。否则return false，同时这里也存在栈已
// 为空的情况，此时拿到的栈顶元素为undefined，同样是return false的，所以情况可以合并。如果读入的是左括号，则入栈。

var isValid = function (s) {
    if (s.length % 2 !== 0) return false
    let match = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (match.hasOwnProperty(s[i])) {
            let top = stack.pop()
            if (match[s[i]] !== top) return false
        } else {
            stack.push(s[i])
        }
    }

    return stack.length == 0
};

// 解法二：正则表达式替换法

// 思路：在while循环中，每一次执行都会将一个()或者[]或者{} replace 为''，如果replace完字符串长度不变，说明未匹配到相应的括号
// 故此时return false。若替换成功，则长度减2，继续执行。如果一直替换到长度为0，则说明括号全部都匹配，return true。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false
    }
    let len = s.length
    while (len > 0) {
        s = s.replace(/\(\)|\[\]|\{\}/g, '')
        if (s.length === len) {
            return false
        }
        len -= 2
    }
    return true
};