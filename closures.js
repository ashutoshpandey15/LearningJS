// #CLOSURES
// Closures are function along with its lexical environment

function p1() {
  var name = "ashu";
  function p2() {
    console.log(name);
  }
  return p2;
}
let c = p1();
c();
