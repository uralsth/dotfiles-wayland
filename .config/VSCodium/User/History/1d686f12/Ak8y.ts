import * as deepEqual from "deep-equal";

// console.log(5 == "5"); 
// console.log(5 === "5"); // false , TS Error
// console.log({a:123} == {a:123}); // False
// console.log({a:123} === {a:123}); // False

console.log(deepEqual({a:123}, {a:123})); // True
