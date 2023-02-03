let stack = [];

function push(element) 
{
    stack.push(element);
}

function pop()
 {
    if (stack.length === 0)
     {
        return "Underflow";
    } 
    else
     {
        return stack.pop();
    }
}

function peek()
 {
    return stack[stack.length - 1];
}

function isEmpty()
 {
    return stack.length === 0;
}

function display()
 {
    console.log(stack.join(" "));
}

function main() {
    let choice;
    do {
        console.log("Choose an operation to perform:");
        console.log("1 Push Stack");
        console.log("2 Pop stack");
        console.log("3 Peek stack");
        console.log("4 Check if stack is empty");
        console.log("5 Display stack");
        console.log("------------------------");
        choice = parseInt(prompt("Enter your choice:"));

        switch (choice) {
            case 1:
                let item = parseInt(prompt("Enter item to push:"));
                push(item);
                break;
            case 2:
                let del = pop();
                console.log("Popped element: " +del);
                break;
            case 3:
                console.log("Top element: " +peek());
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
