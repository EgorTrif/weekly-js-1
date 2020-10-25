const buckets = document.getElementById("buckets");
const massivBuckets = [];

class Bucket {
    constructor(
        fullBucket = false,
        HTML_TAG = null,
        src= "",
    ) {
        this.fullBucket = fullBucket;
        this.HTML_TAG = HTML_TAG;
        this.src = src;
        this.HTML_TAG.src = src;
    }

    changeBucket(newBucket) {

        this.fullBucket = true;
        this.src = newBucket;
    }
}

for (let i = 0; i < 5; i ++) {
    massivBuckets.push(
        new Bucket(
            false,
            document.createElement("img"),'./empBucket.png')); 
            
            massivBuckets[i].HTML_TAG.style.width = "250px"
            massivBuckets[i].HTML_TAG.style.height = "250px"

            massivBuckets[i].HTML_TAG.addEventListener('click', function () {
               
                console.log(i);
        
                if (massivBuckets[i].fullBucket) {
                    alert('Bucket number ' + i + " is already full");
                    return;
                }
    
                massivBuckets[i].changeBucket();
                massivBuckets[i].HTML_TAG.src = './fullBucket.png';
                
        
                console.log(massivBuckets);
            });

            buckets.appendChild(massivBuckets[i].HTML_TAG);
        };
        
        
        console.log(massivBuckets);