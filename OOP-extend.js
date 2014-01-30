/*
 * define Parent class
 */
function Parent() {
    console.log("--- start init parent");
    // do nothing
    console.log("--- end init parent");
}
Parent.prototype.age = 0;
Parent.prototype.getAge = function () {
    return this.age;
}
Parent.prototype.setAge = function (age) {
    this.age = age;
}

/*
 * define Children class
 */
function Children() {
    // @override
    this.setAge = function (age) {
        console.log("set age from Children");
        this.age = age;
    }
}
Children.prototype = Parent.prototype;

function GrandChildren() {
}
GrandChildren.prototype = Parent.prototype;

// create object child
var child = new Children();
child.setAge(14);
console.log(child);
console.log(child.getAge());

// create object grand child
var grandChild = new GrandChildren();
grandChild.setAge(1);
console.log(grandChild);
console.log(grandChild.getAge());
