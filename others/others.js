// constants.. create constant
// data typees.... number, infinity , NaN (Not a number), BigInt, String, Boolean(True or False), the null value, undefined, obeject and symbol
// object is used to store functions of data and more complex entities(data stucture)
// symbol type is used to create unique identifier to objects
// type of operator (typeof)
// interaction: alert, prompt, confirm
alert(' I\'m back ')
result = prompt(title, [default]);
check = confirm(question)

// type conversion - string conversion
let value = true; // boolean
value = String(value); // now value is a string "true"

// numeric conversion
let str = "123";    // string
let num = Number(str); // becomes a number 123

// boolean conversion
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

// task
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12

// taks 2
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?
alert(a);
alert(b); 
alert(c);
alert(d); 

//task 3
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

//comparisons '>' '<' '==' '!='     
/**Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
**/
 
5 > 4  //true
"apple" > "pineapple" //false
"2" > "12"  //true
undefined == null //true
undefined === null // false
null == "\n0\n" // false 
null === +"\n0\n" // false