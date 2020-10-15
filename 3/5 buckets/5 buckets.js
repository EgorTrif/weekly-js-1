/*class Buckets {
    constructor(){
        Bucket = new empBucket();
        empBucket.src = "./empBucket.png";
        Backet = new fullBucket();
        fullBucket.src = "./fullBucket.png"
    }
}*/
const element = document.getElementById(img);
            img = document.createElement("img");
            img.src = "./empBucket.png"

class Creator {
     changeIMG(img) {
        
    if (element.src.indexOf("empBucket.png")>0){
    element.src="fullBucket.png"
}
    else{
    alert("This bucket already full")
}
element.appendChild(img);
}
}
