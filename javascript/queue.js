let queue = [];

function enqueue(item) {
    queue.push(item);
}

function dequeue() {
    if (queue.length === 0) {
        return "Underflow";
    }
    else {
        return queue.shift();
    }
}

function peek() {
    return queue[0];
}

function isEmpty() {
    return queue.length === 0;
}

function display() {
    console.log(queue.join(" "));
}

function main() {
    let choice;
    do {
        console.log("Choose an operation to perform:");
        console.log("1 Enqueue");
        console.log("2 Dequeue");
        console.log("3 Peek");
        console.log("4 Check if queue is empty");
        console.log("5 Display queue");
        console.log("------------------------");
        choice = parseInt(prompt("Enter your choice:"));

        switch (choice) {
            case 1:
                let val = parseInt(prompt("Enter a item to enqueue:"));
                enqueue(val);
                break;
            case 2:
                let del = dequeue();
                console.log("Dequeued item: " +del);
                break;
            case 3:
                console.log("Front item: " +peek());
                break;
            case 4:
                console.log(isEmpty());
                break;
            case 5:
                display();
                break;
            default:
                console.log("Invalid choice");
                break;
        }
    } while (true);
}

main();
