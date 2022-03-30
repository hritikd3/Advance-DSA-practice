class Queue {
  constructor() {
    this.data = [];
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.data[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    if (!this.isEmpty()) {
    //   let element = this.que.splice(0,1);
      this.dequeue--;
      // returning element just poped
      return element;
    }
    //if no element to pop return null
    throw new Error("queue is empty");
  }

  display() {
    console.log(this.data);
  }
  isEmpty() {
    return this.data.length == 0;
  }
}


const queue = new Queue();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.display();

queue.dequeue(200)