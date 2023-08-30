const numbers =['1','2','3']
const numbers3=['4','5','6']
const NewList= numbers.concat(numbers3);


class Node{
	contructor (value, prev= null, next= null){
		this.value= value;
		this.next= next;
		this.prev= prev;
	}
}
class EnlaceDoble{
    contructor (value, prev= null, next= null){
        this.value= value;
        this.next= next;
        this.lenght= 0;
        }

	append (Node){
}
	peek (value, current= this.head){
}
	size (current= this.head, acum=1){
}
	remove (value, current= this.head){
}
	print(){
}

}

console.log(NewList);