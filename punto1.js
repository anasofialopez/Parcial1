var number; 
var Stack= new Array ();

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(number) {
        this.queue.push(number);
				return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }
		
		isEmpty (){
				return this.queue.length===0;
		}


    print() {
        return this.queue;
    }
}

// Create numbers
const number1 = 25;
const number2 = 35;
const number3 = 45;

// Create a new queue
const queue = new Queue('test_queue');

// Add the numbers to the queue
Queue.enqueue(number1);
Queue.enqueue(number2);
Queue.enqueue(number3);

queue.print(); // Print the queue of numbers
console.log('queue size:', queue.size());

//FUNCIÓN INVERTIR 
const invertir = (Queue) => {
    const cola= Queue.print();
    const nueva=[];

    while (Queue.length>0){
            nueva.push(Queue.dequeue());
}
    while (nueva.length>0){
            Queue.enqueue(nueva.pop());
}
    while (Queue.length>0){
            dato=Queue.dequeue();
}
return Queue;
}

invertir();