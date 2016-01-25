# Javascript Beginners Style Guide
When writing javascript, your "style" is very important for readable code. By style, we mean how you indent your code, where you add spaces, etc. Most often, this won't actually affect the code itself, but it will be very helpful in the long run. The following is a review of what we've already covered and best practices. Use it as a reference you can refer to when writing code in the future.

## Declaring Variables
When declarding variables, we write <strong>var</strong> followed by a space, followed by whatever our variable is going to be called, followed by the <strong>=</strong> sign, followed by a space, followed by whatever we're assigning to the variable. Below are some good and bad examples.

good
```javascript
var person = "aaron";
```
<br>
bad
```javascript
var person="aaron";
```
<br>
bad
```javascript
var person ="aaron"
```

## Declaring Functions
When declaring a function, we use spaces around the <strong>function</strong> keywork, and one after the <strong>()</strong>. Everything that goes inside the function body (inside of the brackets <strong>{}</strong>) goes on it's own line (or multiple lines depending on what your write inside the function. Everything inside the function with be indented once (use the "tab" key for this). Below are some good and bad examples:

good
```javascript
var bark = function () {
  console.log("woof");
}
```
<br>
bad
```javascript
var bark = function () {console.log("woof");
}
```
<br>
bad
```javascript
var bark = function(){
console.log("woof");}
```

bad
```javascript
var bark = function(){console.log("woof");}
```

## Declaring Arrays
Items inside of the array should be separated by one space. An array can either be on one line, or multiple depending on it's size and contents. Good and bad examples are below:

good
```javascript
var cities = ['tel aviv', 'berlin', 'new york'];
```
<br>

bad
```javascript
var cities = ['tel aviv','berlin','new york'];
```
<br>

good
```javascript
var posts = [
  {user: "Aaron", message: "hello world!"},
  {user: "Alex", message: "hey world!"},
  {user: "Avi", message: "sup world!"}
];
```
<br>

bad
```javascript
var posts = [
  {user: "Aaron", message: "hello world!"}, {user: "Alex", message: "hey world!"}, {user: "Avi", message: "sup world!"}
];
```
<br>
