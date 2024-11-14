// Investigation Studies

// let BookPrice = 'Rs670'
/*
 It is a string.

  console.log(typeof BookPrice)

   ===> Proved To convert it into numbers*/

// let BookPriceInNumber = Number(BookPrice)

// console.log(typeof BookPriceInNumber)

// But

// console.log(BookPriceInNumber)

/*So When I console.log only BookPriceInNumber the NaN
because the "Rs670" is not a number but when I remove 
that Rs the ans will be 670 and when I console.log the type
variable the it terminal show Number because we asign the 
Number manualy*/

// let AnswerIs = NaN
// let Check = Boolean(AnswerIs)
// // console.log(AnwerIs) 
// console.log(Check) 
/*
1 = True after convert into Boolean
0 = False after convert into Boolean
"" = False
"Hello" = True
"0" = True
null = false
NaN = false

// */
// let IHaveNumber = 40
// let MyNumber = String(IHaveNumber)
// console.log(typeof MyNumber)

/*

PREFIX AND POSTFIX

 Prefix (++x): Incremented first, then value assigned.
 Postfix (x++): Value assigned first, then incremented.*/

 let x = 5;
const y = x++; // Postfix
console.log(`x:${x}, y:${y}`);
// similarly
let a = 5;
const b = ++a; // Prefix
console.log(`a:${a}, b:${b}`);