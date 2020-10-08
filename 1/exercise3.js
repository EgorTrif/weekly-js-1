var array = [1, 2, 3, 4, false]
    index = 0
    sum = 0
do {
 sum+= array[index++]
} while (index < array.length)
console.log(sum)