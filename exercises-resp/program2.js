var total = 0;
for (var i = 0; i < process.argv.length; i++) {
  if (i>1) {
    total += parseInt(process.argv[i]);
  }
}
console.log(total);

/*
//Here's the official solution
var result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)*/
