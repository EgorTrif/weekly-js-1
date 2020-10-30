const body = document.getElementById("body");
body.style.backgroundImage = "url(./background.jpg)";
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize = "1536px 754px"
body.style.color = "white";
body.style.textAlign = "center";

const massivHouses = [];
const massiveWater = [];

class Water {
    constructor(
        needWater = false,
        HTML_TAG = null,
        src= "",
    ) {
        this.needWater  = needWater ;
        this.HTML_TAG = HTML_TAG;
        this.src = src;

        this.HTML_TAG.src = src;
    }
    changeWater() {

        this.needWater = true;
        this.HTML_TAG.style.opacity = "1";
    }
}

class House {
    constructor(
        burningHouse = false,
        HTML_TAG = null,
        src= "",
    ) {
        this.burningHouse = burningHouse;
        this.HTML_TAG = HTML_TAG;
        this.src = src;
        this.HTML_TAG.src = src;
    }

    changeHouse() {

        this.burningHouse = true;
        this.src = './fire.gif';
        this.HTML_TAG.src = './fire.gif';
    }
}

class Render {
    constructor(houses){
    this.houses = houses}

    renderHouses() {
        const houses = document.getElementById("houses");
        houses.style.marginTop = "340px";

        const div = document.createElement("div");
        div.id = "text";
        div.style.fontSize = "22pt";
        div.style.marginTop = "inherit";
        div.style.fontFamily = "'Press Start 2P', cursive";
        houses.appendChild(div);
        
        const water = document.createElement("div");
        water.id = "water";
        houses.appendChild(water);
        
        for (let i = 0; i < 10; i ++) {
            massiveWater.push(
                new Water(
                false,
                document.createElement("img"),'./water.png'));
            
            massivHouses.push(
                new House(
                    false,
                    document.createElement("img"),'./house.png'));

                    massiveWater[i].HTML_TAG.style.width = "150px";
                    massiveWater[i].HTML_TAG.style.height = "150px";
                    massiveWater[i].HTML_TAG.style.opacity = "0";

                    massivHouses[i].HTML_TAG.style.width = "150px";
                    massivHouses[i].HTML_TAG.style.height = "150px";

                    /*massivHouses[i].HTML_TAG.addEventListener('click', function () {
                    
                        console.log(i);
                        
                        if (massiveWater[i].needWater){
                            div.innerHTML = "The house " +(i+1)+ " was extinguished!";
                            massiveWater[i].HTML_TAG.style.opacity = "0";
                            massivHouses[i].HTML_TAG.src = './house.png';
                            div.style.opacity = "1";
                            return;
                        }
                        else if (massivHouses[i].burningHouse) {
                            massiveWater[i].changeWater();
                            
                        }
                        
                        massivHouses[i].changeHouse();
                        div.style.opacity = "0";

                        
                });*/
                
                    water.appendChild(massiveWater[i].HTML_TAG);
                    houses.appendChild(massivHouses[i].HTML_TAG)
                }
        }
}

function letsburn(){
    let i = Math.floor(Math.random()*10)
        massivHouses[i].changeHouse()
        document.getElementById("text").style.opacity = "0";
function putout(){
    if (massivHouses[i].burningHouse) {
        massiveWater[i].changeWater(); 
}
function normalhouse() {
    if (massiveWater[i].needWater){
        document.getElementById("text").innerHTML = "The house " +(i+1)+ " was extinguished!";
        massiveWater[i].HTML_TAG.style.opacity = "0";
        massivHouses[i].HTML_TAG.src = './house.png';
        document.getElementById("text").style.opacity = "1";
    }
}
setTimeout(normalhouse, 5000)
}
setTimeout(putout,2000);
}
setInterval(letsburn, 9000);

const houses = new Render("houses");
houses.renderHouses();






