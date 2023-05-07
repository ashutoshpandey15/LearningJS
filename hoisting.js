// #HOISTING
// hoisting refers to a process in which it seems
// that interpretor is moving the declarations to the top of the code.
// functional expressions and class expressions are not hoisted.
// var can be hoisted --> gives undefined
// const and let cannot be hoisted
name1("ashu");
function name1() {}

console.log(num);
var num; // gives undefined
let num = 6; // gives and error that we have to initiallize it before using
const num = 6; // gives and error that we have to initiallize it before using
