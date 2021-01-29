1) Length of prices will be printed. Since `i` is declared as a `var`, it has function scope. Therefore, the `console.log` statement can access `i` since it is inside the function.  
2) Will print `prices[prices.length - 1] * (1 - discount)` which is the last value held by `discountedPrice` before the loop ends. Again, since `discountedPrice` is declared as a `var`, it has function scope and can be accessed outside the for loop but inside the function.
3) The last value held by `finalPrice` before the loop ends will be printed. Since final price is declared before the `for` loop and is only being updated inside the loop, its value can still be accessed after the loop runs.
4) `3` newline `150` newline `150`. 
   Line 11 will return the last value of `i` which will be the length of `prices`, 3. Line 12 will return the last held value of `discountedPrice` which is `prices[3 - 1] * (1 - 0.5) = 150`. Line 13 will return the last held value of `finalPrice` which is `Math.round(150*100)/100 = 150`
5) Error: `i` is not defined. Since `i` is declared as `let` inside the for loop, its scope is local to the for loop and cannot be accessed outside of it. Since `console.log(i)` is called after the for loop, `i` cannot be accessed anymore
6) Error: `discountedPrice` is not defined. Same reason as above: `discountedPrice` is local to the for loop and cannot be accessed outside. 
7) The last value held by `finalPrice` after the for loop execution will be printed. Since `finalPrice` is declared outside the for loop and is only being updated inside the for loop, its value can be accessed once the for loop finishes executing.
8) Error saying `i is not defined`. Since `i` is local to the for loop, it cannot be accessed outside of it so the function will throw an error at line 11 and stop executing. 
9) Error: `i` is not defined. Since `i` is declared as `let` inside the for loop, its scope is local to the for loop and cannot be accessed outside of it. Since `console.log(i)` is called after the for loop, `i` cannot be accessed anymore
10) Output the value stored in `discountedPrice` after the last iteration of the loop. Each time the loop runs, `discountedPrice` is being declared as a new variable. So, at line 12, the output will be `prices[prices.length - 1] * (1 - discount)`
11) Error: nothing will be printed because there will be an error at line 7 since `finalPrice` that is declared as a `const` is being updated inside the for loop which is illegal. 
12) Error (type error) at line 7 because a `const` variable is being updated. 
13) answers
    1)  `student.name;`
    2)  `student["Grad Year"];`
    3)  `student.greeting();`
    4)  `student["Favorite Teacher"].name;`
    5)  `student.courseLoad[1];`
14) answers
    1)  `'32'` string concatnation, the second operand is converted into a String 
    2)  `1` the first operand is converted into a Number
    3)  `3` the `null` is converted into a Number with value 0
    4)  `3null` null is converted into a String and concatnated with `'3'`
    5)  `4` true is converted to Number as 1 and is added to 3
    6)  `0` false and null are converted into numbers, both with value 0
    7)  `3undefined` undefined is converted into a string and concatnated to `'3'`
    8)  `NaN` undefined is converted into its Number value as NaN. '3' is converted into a Number and the operation results in NaN.
15) 
    1)  `true` '2' is converted into its Number value of 2 and 2 > 1 is true 
    2)  `false` lexicographical string comparison. since first chars of both are compared, '2' is greater than '1' which results in false. 
    3)  `true` second operand is converted into a Number 
    4)  `false` first and second operands are of different types (strict equality operator)
    5)  `false` first operand is converted into a Number to give 1. 1 != 2
    6)  `true` Boolean(2) results in true. Then both operands are of type Boolean, so output is true 
16) `==` checks equality with type conversion. If the two operands are of different types, it will change types to match each other and then checks equality. `===` is a strict equality operator and checks equality without type conversion. Therefore, if the two operands are of different types, it outputs false. 
17) `'How are you?'` the first if condition is not met because 2 == true changes to 2 == 1 which is false. for the else if condition, 2 is converted into its boolean value as Boolean(2) which gives true. Since the else if condition is met, How are you? is printed. 
18) part1-question18.js
19) `6` newline `8` newline `10` newline. After `modifyArray` is called, the for loop inside this method iterates three times for values `i = 0,1,2`. For `i = 0` in the for loop, `doSomething(array[i], function(x) {return x * 2;})` is called. This goes over to the `doSomething` stack with `num` being `1` and `callback` being `function(x) {return x * 2;}`. Here, `function(1 + 2)` is returned which results in `3*2 = 6`. Back in the for loop in `modifyArray`, this `6` is pushed to `newArr`. The same process repeats for `i = 1, 2` which results in `8` and `10` being pushed to `newArr`.
20) part1-question20.js
21) `1` newline `4` newline `3` newline `2`