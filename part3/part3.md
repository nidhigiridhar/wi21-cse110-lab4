DevTools Debugging
1) The sum of the two numbers was getting stored as a string instead of a number. The variable `result` that stored the sum was of type string. Therefore, the operation `let result = num1 + num2` simply performed string concatnation instead of arithemtic operation. 
2) We could fix it by explicitly type casting num1 and num2 as Numbers like this: `let result = Number(num1) + Number(num2)`   

DevTools Network Tab
1) citylots.json
2) part2.js
3) 11.7MB
4) 204 ms
5) Mozilla/5.0 AppleWebKit/537.36 Chrome/87.0.4280.141 Mobile Safari/537.36
6) Apache
7) Tue, 26 Jan 2021 22:14:13 GMT
8) application/json
9) fetchData()