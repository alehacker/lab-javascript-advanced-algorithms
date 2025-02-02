
class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }
 
  // canPush is a boolean function that checks if the stack is full or not
  canPush() {
    let result = false
    if (this.stackControl.length < this.MAX_SIZE){
        result = true;
    }
    return result;
  }

  // isEmpty is a boolean function that checks if the stack is empty
  isEmpty() {
    return this.stackControl.length === 0
  }

  //push will put new items into the array and will flag stack overflow
  push(item) {
    if (this.canPush()){
        this.stackControl.push(item)
        return this.stackControl
    }
    throw new Error('STACK_OVERFLOW');
  }

  //This function will remove the last element in the stack.
  pop() {
    switch(true){
        case this.isEmpty():
            throw new Error('STACK_UNDERFLOW');
            break;
        default:
            return this.stackControl.pop();
            break;
    }
  }
  
  // This function will return the list of items stored in the stack.
  display() {
    return this.stackControl
  }
}  


// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;

// constructor(size) {
//     this.stackControl = [];
//     this.MAX_SIZE = size;
//   }

//   canPush() {
//     if (this.stackControl.length === this.MAX_SIZE) return false;
//     return true;
//   }

//   display() {
//     return this.stackControl;
//   }

//   isEmpty() {
//     if (this.stackControl.length > 0) return false;
//     return true;
//   }

//   push(item) {
//     if (this.canPush()) {
//       this.stackControl.push(item);
//       return this.stackControl;
//     } else {
//       return 'Stack Overflow';
//     }
//   }

//   pop() {
//     if (this.stackControl.length === 0) {
//       return 'Stack Underflow';
//     } else {
//       return this.stackControl.pop();
//     }
//   }
