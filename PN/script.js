
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
        if (typeof number === "number") {
            if (number < 2){
            this.status = {
                status: false,
                description: "This number is not a prime"
            }
            }
            for (let i = 2; i <= Math.sqrt(number); i++) 
            if (number % i == 0) {
                this.status = {
                    status: false,
                    description: "This number is not a prime"
                }
            }
                else this.status = {
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
        const screen = document.getElementById(this.screenId);

        const h2 = document.createElement("h2");
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

        screen.appendChild(h2);
        screen.appendChild(input);
        screen.appendChild(button);
        screen.appendChild(output);

        let hdr = document.createElement("h2");
        hdr.innerHTML = "Is this a prime number?";
        h2.appendChild(hdr);

        let inpt = document.createElement("input");
        inpt.id = "inpt_id";
        inpt.type = "number";
        input.appendChild(inpt);



        let btn = document.createElement("button")
        btn.innerHTML = mainButton.value;
        button.appendChild(btn);
  
        btn.addEventListener('click', function(){
            console.log(MathLibrary.isPrime(input.value))    
            
            //const {value} = inpt;
           // if (MathLibrary.isPrime(value)) output.innerHTML = "This number is a prime"
            //else output.innerHTML = "This number is not a prime"
            }) 
  
    }

    }
    const number = new Render("number");
    
    number.renderNumber();
    