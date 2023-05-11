object means dict in js.
new converts into objects

--------------------
<p id="demo">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
#############

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
---------
document.getElementById("demo").style.fontSize = "35px";
<button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>
-------
 <script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
-------------
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>
#############
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
-------------
 <script src="https://www.w3schools.com/js/myScript1.js"></script>
  <script src="/js/myScript1.js"></script>
-------------

    Writing into an HTML element, using innerHTML.
    <script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>
    Writing into the HTML output using document.write().
    <script>
document.write(5 + 6);
</script>

Using document.write() after an HTML document is loaded, will delete all existing HTML:
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<button type="button" onclick="document.write(5 + 6)">Try it</button>

</body>

    Writing into an alert box, using window.alert().
    <script>
window.alert(5 + 6);
</script>
    Writing into the browser console, using console.log().
---------------
In HTML, JavaScript programs are executed by the web browser.

------------
Hyphens are not allowed in JavaScript. They are reserved for subtractions.
-------
var x = "5" + 2 + 3;  not required to put " on" all digits.
523
----------
var x = 2 + 3 + "5";
document.getElementById("demo").innerHTML = x;
55
-----------------------------
<p id="demo"></p>

<script>
var $ = 2;
var $myMoney = 5;
document.getElementById("demo").innerHTML = $ + $myMoney;
</script>
7
--------------------------------------
var x = {firstName:"John", lastName:"Doe"};    // Object
------------------
var x = 16 + "Volvo";

16volvo
----------------------
var x = "Volvo" + 16;
volvo16
------------------
 var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123
-----------------
var x = "Volvo" + '16';
volvo16
----------------
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

---------------
The typeof operator returns "object" for objects, arrays, and null.

The typeof operator does not return "object" for functions.
-----------------
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);

25
----------------------------
Accessing a function without () will return the function object instead of the function result.
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;

o/p==function toCelsius(f) { return (5/9) * (f-32); }

-----------------------------------------
<script>
document.getElementById("demo").innerHTML =
"The temperature is " + toCelsius(77) + " Celsius";

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
</script>

o/p===The temperature is 25 Celsius
-----------------------------------
var x = "We are the so-called \"Vikings\" from the north.";
-------------
When using the === operator, equal strings are not equal, because the === operator expects equality in both type and value.

 var x = "John";
var y = new String("John");

// (x === y) is false because x and y have different types (string and object)
----------------
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
var pos = str.lastIndexOf("locate");

The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15,
and searches to the beginning of the string.

var pos = str.lastIndexOf("locate", 15);
var pos = str.search("locate");


    The search() method cannot take a second start position argument.
    The indexOf() method cannot take powerful search values (regular expressions).

substring() cannot accept negative indexes.

    slice(start, end)
    substring(start, end)
    substr(start, length)

var res = str.slice(-12);
var res = str.substring(7, 13);

The replace() method does not change the string it is called on. It returns a new string.
By default, the replace() method replaces only the first match:

To replace case insensitive, use a regular expression with an /i flag (insensitive):
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");


To replace all matches, use a regular expression with a /g flag (global match):
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");


he trim() method removes whitespace from both sides of a string:
var str = "       Hello World!        ";
alert(str.trim());


The charAt() method returns the character at a specified index (position) in a string:
var str = "HELLO WORLD";
str.charAt(0);


The charCodeAt() method returns the unicode of the character at a specified index in a string:
var str = "HELLO WORLD";

str.charCodeAt(0);
--------------
If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single character
JavaScript numbers are always stored as double precision floating point numbers,
-----------
 var x = "100";
var y = "10";
var z = x - y;       // z will be 90


 var x = "100";
var y = "10";
var z = x * y;       // z will be 1000

 var x = 100 / "Apple";  // x will be NaN (Not a Number)

 var x = 100 / "10";     // x will be 10

var x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number

 var x = NaN;
var y = 5;
var z = x + y;         // z will be NaN

 var x = NaN;
var y = "5";
var z = x + y;         // z will be NaN5

NaN is a number: typeof NaN returns number:

you can use the toString() method to output numbers from base 2 to base 36.
var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

 var x = 123;
var y = new Number(123);

// typeof x returns number
// typeof y returns object

###################
The toString() method returns a number as a string

toExponential() returns a string, with a number rounded and written using exponential notation
toFixed() returns a string, with the number written with a specified number of decimals:
toPrecision() returns a string, with a number written with a specified length:
valueOf() returns a number as a number.


These are the most relevant methods, when working with numbers:
Method 	Description
Number() 	     :                Returns a number, converted from its argument.
parseFloat() 	   :                 Parses its argument and returns a floating point number
parseInt() 	       :              Parses its argument and returns an integer


Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN


parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN

parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

-----------------------
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

-------------------
pop,shift like same. will return the element deleted
push,unshift r same. will add element and return the new length of the array.


Using delete may leave undefined holes in the array. Use pop() or shift() instead.

The splice() method can be used to add new items to an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:

----------------------
hoisting is only for var declared not for let,const declared.

With strict mode, you can not, for example, use undeclared variables.

------------------------------

using var, the variable declared in the loop redeclares the variable outside the loop.
using let, the variable declared in the loop does not redeclare the variable outside the loop.

When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.

Redeclaring a var variable with let, in the same scope, or in the same block, is not allowed:
Redeclaring a let variable with let, in the same scope, or in the same block, is not allowed:
Redeclaring a let variable with var, in the same scope, or in the same block, is not allowed:

























































































































