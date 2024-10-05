var Numbers = [46, 23, 7, 39, 19, 0, 9, 14,]
document.write("<h1>" + "ACTUAL ARRAY" +"<br>" +  Numbers + "</h1>")
for (var i = 0; i < Numbers.length; i++) {
    for (var j = 0; j < Numbers.length; j++) {
        if (Numbers[j] > Numbers[j + 1]) {
            [Numbers[j], Numbers[j + 1]] = [Numbers[j + 1], Numbers[j]]
        }
    }
}
document.write("<H1>" + "SORTED ARRAY" +"<br>" + Numbers + "</h1>")

// question2
var numbers = [1, 2, 3, 5]; 


var n = numbers.length + 1; 
var expectSum = (n * (n + 1)) / 2;


var actualSum = 0;
for (var i = 0; i < numbers.length; i++) {
    actualSum += numbers[i];
}


var missingNumber = expectSum - actualSum;

console.log(missingNumber);
