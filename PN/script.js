
class Button {
    constructor(value) {
        this.value = value;
    }
}

const mainButton = new Button("Check")
class Сomputation {
    constructor(status){
        this.status = status

    }
    isPrime(number) {
        if (number < 2) {
            return this.status = {
                status: false,
                description: "This number is not a prime"
            }} else if (number === 2) {
                return this.status = {
                    status: true,
                    description: "This number is a prime"
                   }}
            let i = 1;
            const limit = Math.floor(Math.sqrt(number));
            while (i <= limit, i++) {
            if (number % i === 0) {
            return this.status = {
                status: false,
                description: "This number is not a prime"
            }
        }
            return this.status = {
                status: true,
                description: "This number is a prime"
               }
            }
        }
    }


const MathLibrary = new Сomputation("prime");


class Render {
    constructor(screenId) {
        this.screenId = screenId;
    }
    renderNumber() {
        const body = document.getElementById("body");
        body.style.background = "linear-gradient(to right, pink, yellow)";
        body.style.color = "purple";
        
        const screen = document.getElementById(this.screenId);

        const h2 = document.createElement("h2");
        h2.style.fontFamily = "curlz MT";
        h2.style.fontSize = "42pt"
        h2.innerHTML = "Is this a prime number?";

        
        const button = document.createElement("div");
        const input = document.createElement("div");
        const output = document.createElement("div");
        
        h2.className = "h2"
        input.className = "input";
        input.style.padding = "10px";
        button.className = "button";
        button.style.padding = "10px";
        output.className = "output";
        output.style.padding = "10px";
        output.style.fontFamily = "curlz MT";
        output.style.fontSize = "100pt";

        screen.appendChild(h2);
        screen.appendChild(input);
        screen.appendChild(button);
        screen.appendChild(output);

        let inpt = document.createElement("input");
        inpt.id = "inpt_id";
        inpt.style.color = "white"
        inpt.style.backgroundImage = "url('./6311edb6f3a600c9f4a23c35473788a4.jpg')";
        inpt.style.backgroundPosition = "center";
        inpt.style.backgroundSize = "50%";
        inpt.style.width = "300px";
        inpt.style.height = "50px";
        inpt.style.fontSize = "30px";
        inpt.style.boxShadow = "0 14px 28px rgba(0,0,0,0.55), 0 10px 10px rgba(0,0,0,0.52)";
        inpt.type = "number";
        input.appendChild(inpt);

        inpt.addEventListener('keydown', function(event){
            if (event.key == "Enter"){   
            const {value} = inpt;
            if (inpt.value < 0 || parseInt(inpt.value) != inpt.value) {
                output.innerHTML = "Wrong input!"
            }
            else {
            let result = MathLibrary.isPrime(Number(value))
            console.log(MathLibrary.isPrime(Number(value)))
            output.innerHTML = result.description
            }}});

        let btn = document.createElement("button")
        btn.style.width = "100px";
        btn.style.height = "50px";
        btn.style.backgroundColor = "darkRed";
        btn.style.boxShadow = "0 14px 28px rgba(0,0,0,0.55), 0 10px 10px rgba(0,0,0,0.52)";
        btn.style.color = "gold";
        btn.style.fontSize = "20pt"
        btn.style.fontFamily = "curlz MT";
        btn.innerHTML = mainButton.value;
        button.appendChild(btn);
  
        btn.addEventListener('click', function(){
               
            const {value} = inpt;
            if (inpt.value == "") {
                output.innerHTML = "Empty input!"
            } else if (inpt.value < 0 || parseInt(inpt.value) != inpt.value) {
                output.innerHTML = "Wrong input!"
            }
            else {
            let result = MathLibrary.isPrime(Number(value))
            console.log(MathLibrary.isPrime(Number(value)))
            output.innerHTML = result.description
            }});
    }
}
    const number = new Render("number");
    
    number.renderNumber();
    