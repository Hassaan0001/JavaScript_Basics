// Null
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);
// console.log(null != 0);
// Undefined
// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// console.log(undefined != 0);



/*
                                        ***Conclusion***
In the above code when null compare to 0 with (==) the answer is false because null is loosely equal to undefined and no other value.
But when it compare with numeric operators (>=, <=, >, <) it in order to compare itself convert into 0 so the answer is true
But the undefined cannot be compared to numbers but to null.

                                            |Note:|
Avoid these types of Conversion.
*/
// Pirimitives String, Boolean, Number, Null, Undefined, BigInt, Symbol
/
// Non Pirimitives or Reference
// Array, Objects, Funtions
 
// https://262.ecma-international.org/5.1/#sec-11.4.3