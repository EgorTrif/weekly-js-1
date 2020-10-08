var str = 'фыов33рыфвр'
  
    numStr = ''

    for (var index in str) {
    if ( parseInt(str[index]) ) {
      numStr += str[index]
    }
  }
  console.log(numStr)
  