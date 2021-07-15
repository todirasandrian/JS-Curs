const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// expected output: false



function A(){ console.log('called A'); return false; }
function B(){ console.log('called B'); return true; }

console.log( A() && B() );
// logs "called A" due to the function call,
// then logs false (which is the resulting value of the operator)






