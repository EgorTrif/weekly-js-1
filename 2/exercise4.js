var massive = ["1","3", "vasya"]
    
for (var i = 0; i < Math.floor(massive.length / 2); i++) {
    var item = massive[i];
    massive[i] = massive[massive.length - i - 1];
    massive[massive.length - i - 1] = item;
  }
  console.log(massive);
