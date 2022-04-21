let arr = [1, 3, 6, 1, 0, 9];
let jumps = [];
jumps[0] = 0;

//if the array having one element or the value of the first index is 0
if (arr.length == 0 || arr[0] == 0) console.log(false);

for (let i = 1; i <= arr.length - 1; i++) {
  jumps[i] = 999999;
  for (let j = 0; j < i; j++) {
    if (i <= j + arr[j] && jumps[j] != 999999) {
      jumps[i] = Math.min(jumps[i], jumps[j] + 1);
      break;
    }
  }
}

console.log("Min number of jumps are " + jumps[arr.length - 1]);
