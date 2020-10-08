let mass = [8, 5, 9, 1, 2],
sorted = [];
for (; mass.length;)  { sorted.push(mass.splice(mass.indexOf(Math.min(...mass)),1)[0])}
console.log(sorted)