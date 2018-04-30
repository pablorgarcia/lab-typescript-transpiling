/* helloworld.ts */
class Greeter {
  constructor(public message: string) { }
  sayHi() {
      return "<h1>" + this.message + "</h1>";
  }
  sayBye() {
    return "<p>byyyyyyeeeeee</p>"
  }
}

let greeter = new Greeter("Hello");

document.body.innerHTML = greeter.sayHi()+greeter.sayBye();
// document.body.innerHTML = greeter.sayBye();