//stack 栈  数组就是一个很完美的栈结构
//functions: pop,push,peek,length

let stack = function () {
    this.count = 0;
    this.storage = {};

    //给栈中添加一个元素 push
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //给栈中移除一个元素 pop
    this.pop = function (value) {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count]
        delete this.storage[this.count]

        return result
    }

    //栈的大小
    this.length = function () {
        return this.count;
    }

    //返回栈顶的元素
    this.peek = function () {
        return this.storage[this.count-1]
    }
}


let myStack = new stack();

myStack.push(1)
myStack.push(2)
myStack.push(3)

console.log(myStack);   //  storage: { '0': 1, '1': 2, '2': 3 },

console.log(myStack.peek());   //3
console.log(myStack.pop());     //3
console.log(myStack.length());    //2
