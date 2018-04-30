/* helloworld.ts */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        return "<h1>" + this.message + "</h1>";
    };
    Greeter.prototype.sayBye = function () {
        return "<p>byyyyyyeeeeee</p>";
    };
    return Greeter;
}());
var greeter = new Greeter("Hello");
document.body.innerHTML = greeter.sayHi() + greeter.sayBye();
// document.body.innerHTML = greeter.sayBye();
