var arr = [1, 2, 3, 4, 5],
    d = 3;

for (var i = d; i < arr.length; i++) arr.unshift(arr.pop());
console.log(arr);
