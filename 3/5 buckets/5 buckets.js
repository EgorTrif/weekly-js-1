const buckets = document.getElementById("buckets");
const massivBuckets = [
    {
        fullBucket: false,
        HTML_TAG: document.createElement("img")
    },
    {
        fullBucket: false,
        HTML_TAG: document.createElement("img")
    },
    {
        fullBucket: false,
        HTML_TAG: document.createElement("img")
    },
    {
        fullBucket: false,
        HTML_TAG: document.createElement("img")
    },
    {
        fullBucket: false,
        HTML_TAG: document.createElement("img")
    },
];


function renderMyBucket() {
    for (let i = 0; i < massivBuckets.length; i++) {

        massivBuckets[i].HTML_TAG.src = "./empBucket.png"
        massivBuckets[i].HTML_TAG.style.width = "100px";
        massivBuckets[i].HTML_TAG.style.height = "100px";


        buckets.appendChild(massivBuckets[i].HTML_TAG);
    }
}

renderMyBucket();


const myBuckets = document.getElementsByTagName("img");

myBuckets[0].addEventListener('click', function (){
    console.log(massivBuckets[0].fullBucket)

    if (massivBuckets[0].fullBucket) {
        massivBuckets[0].HTML_TAG.style.opacity = "0";
    }

    myBuckets[0].src = "./fullBucket.png"
    massivBuckets[0].fullBucket = true

    console.log(massivBuckets);
});

myBuckets[1].addEventListener('click', function (){
    console.log(massivBuckets[1].fullBucket)

    if (massivBuckets[1].fullBucket) {
        massivBuckets[1].HTML_TAG.style.display = "none";
    }

    myBuckets[1].src = "./fullBucket.png"
    massivBuckets[1].fullBucket = true

    console.log(massivBuckets);
});

renderMyBucket(massivBuckets - 1);

myBuckets[2].addEventListener('click', function (){
    console.log(massivBuckets[2].fullBucket)

    if (massivBuckets[2].fullBucket) {
        massivBuckets[2].HTML_TAG.style.height = "0";
    }

    myBuckets[2].src = "./fullBucket.png"
    massivBuckets[2].fullBucket = true

    console.log(massivBuckets);
});
myBuckets[3].addEventListener('click', function (){
    console.log(massivBuckets[3].fullBucket)

    if (massivBuckets[3].fullBucket) {
        massivBuckets[3].HTML_TAG.style.position = "absolute";
        massivBuckets[3].HTML_TAG.style.top = "-999px";
    }

    myBuckets[3].src = "./fullBucket.png"
    massivBuckets[3].fullBucket = true

    console.log(massivBuckets);
});
myBuckets[4].addEventListener('click', function (){
    console.log(massivBuckets[4].fullBucket)

    if (massivBuckets[4].fullBucket) {
        alert("This bucket is already full");
    }

    myBuckets[4].src = "./fullBucket.png"
    massivBuckets[4].fullBucket = true

    console.log(massivBuckets);
});


// ______________________________ DLTA SILIH
// KOGDA V VEDRE EST VODA DELAT EGO SNOVA PUSTIM I UDALYAT S EKRANA
// diplay none
// opacity
// height : 0
// position: absolutte + top: -30000000000000

// udalit element iz massiva a potom sdelat perender veder

