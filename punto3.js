var number;

class Pila {
    constructor() {
        this.stack = [];
    }

    push(number) {
        this.stack.push(number);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }

    print() {
        console.log(this.stack);
    }
}

const number1=(25);
const number2=(35);
const number3=(45);

const Pila = new Stack();

Pila.push(number1);
Pila.push(number2);
Pila.push(number3);


const invertir = () => {
    while (number1.length>0){
            dato= number1.pop();
            number2.push(dato);
            }
    while (number2.length>0){
            number3.push(number2.pop());
            }
    while (number3.length>0){
            number1.push(number3.pop());
            }
    while (number1.length){
        return("Pila Invertida");
            }
}

invertir();