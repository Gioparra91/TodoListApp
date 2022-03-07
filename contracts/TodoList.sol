pragma solidity ^0.5.0;

contract TodoList {
  // define variable that is an integer
  uint public taskCount = 0;
     // i think this is how to display the box
  struct Task {
    uint id;
    string content;
    bool completed;
  }
    // create a variable "tasks" that is a dictionary key/value
  mapping(uint => Task) public tasks;
    // event is user-created
  event TaskCreated(
    uint id,
    string content,
    bool completed
  );

  event TaskCompleted(
    uint id,
    bool completed
  );

    // we are creating a function to put task struct into the structuring
    // constructor is the init, it runs when the cs is run for the firsttime 
  constructor() public {
    createTask("Check out dappuniversity.com");
  }

  function createTask(string memory _content) public {
    taskCount ++; //increase count by one
    tasks[taskCount] = Task(taskCount, _content, false);
    emit TaskCreated(taskCount, _content, false);
  }

  function toggleCompleted(uint _id) public {
    Task memory _task = tasks[_id];
    _task.completed = !_task.completed;
    tasks[_id] = _task;
    emit TaskCompleted(_id, _task.completed);
  }

}