//set 
function mySet() {
    let collection = [];
    //has 用来检查一个元素是否存在，返回true or  false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    }
    //value 用来返回所有在set中的值
    this.value = function () {
        return collection;
    }
    //add 用来 添加元素,返回true or  false
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }
    //remove（ES6中是delete）用来删除set中的元素
    this.remove = function (element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    //-----------以上都是 ES6中存在的属性和方法-----------

    //返回set的大小
    this.size = function () {
        return collection.length;
    }
    //获取两个集合中存在的并集
    this.union = function (otherSet) {
        let unionSet = new mySet();
        let firstSet = this.value();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        })
        otherSet.forEach(function (e) {
            unionSet.add(e);
        })
        return unionSet;
    }

     //获取两个集合中存在的交集
    this.intersection = function (otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.value();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        })
        return this.intersectionSet
    }

    //获取两个集合中的差集
    this.difference = function (otherSet) {
        let difference = new mySet();
        let firstSet = this.value();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                difference.add(e)
            }
        })
        return difference
    }

    //判断一个set 是否完全包含  另一个 set结构
    this.subset = function (otherSet) {
        let firstSet = this.value();
        return firstSet.every(function (value) {
            return otherSet.has(value)
        })
    }

}

var setA = new mySet();
var setB = new mySet();

setA.add("a")
setA.add("b")
setA.add("c")
setB.add("a")
setB.add("d")