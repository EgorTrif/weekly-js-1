class Number {

    generate(min, max){
       return Math.floor(('0.'+ new Date().getMilliseconds()) * (max - min)) + min;
        
       //return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
const randNubmer = new GenNumber(0, 15);
    console.log(randNubmer.generate());