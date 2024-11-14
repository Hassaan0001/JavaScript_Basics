console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null != 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined != 0);
/*
In the above code when null compare to 0 with (==) the answer is false because null is loosely equal to undefined and no other value.
But when it compare with numeric operators (>=, <=, >, <) it in order to compare itself convert into 0 so the answer is true
But the undefined cannot be compared to numbers but to null.

*/