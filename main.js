//// SETTING STEP: node, truffle, ganache, git correct version
// create repository in git, clone in vscode with ctrl+shift+p git:clone and choose foolder in local pc
// stage, commit and push changes at the end of the day
// type below in console:
// node -v
// git --version
// npm install -g truffle@5.0.2
// truffle version
// truffle init --> notice the folders and config files got created
// create new file called package.json with dependencies and copy paste from his github
// npm install --> this will isntall all dependencies (make sure all versions aligned to his)

//// CREATE SC STEP
// create the sc you want under "contracts"
// create the sc by typing in console "truffle compile": notice in the "build folder"
// notice the two "sc json definition" instead of .sol
// the json file is the ABI file = abstract binary interface and it contains the bytecode version of sc

//// TRUFFLE CONFIG
// copy paste config in truffle-config.js to connect to ganache (blockchain id step)

//// CREATE MIGRATION FILE TO GET SC ONTO BC
// migrating a sc is like migrating a db.
// migrating a db means chg the state of the db with new tables etc
// migrating a sc means chg the state of the bc itself, with a new sc
// create a 2nd migration file.js with the new state to be deployed
// make sure ganache is open; in console "truffle migrate"
// deploying sc costs gas!

//// GET INFO ABOUT SMARTCONTRACT
// "truffle console" in console
// "todoList = await TodoList.deployed()" Todolist is name var created in migration
// "todoList.address" and "takeCount = await app.taskCount()"

//// GIT: use have vscode and you previously created the repo, dont follow below
// git init
// git add .
// git commit -am "project set up"

//// PART 2. LIST TASK
// (1) list task in sc, (2) lsit task in console (3) lt in client side app, (4) in test
// he is editing the TodoList.sol file with new functionalities
// then "truffle compile" to edit the contract abi in .json
// then you need to migrate the new sc to bc: "truffle migrate --reset" reset to chg existing sc
// you can play with the sc like you did 2 steps above

//// BS-CONFIG.JSON + INDEX.HTML
// configuring the server-lite in package.json for front end
// create bs-config.json
// index.html it's just the html front end, he didnt spend time on this, just copy paste

// "npm run dev" to launch the webapp. it should opne with "loading" and 404 error
// now you need to fill the "taskList" and "completedtaskList" id for the user in the index.html
// you need to connect your bs to bc using metamask: use web3.js inside app.js
// app.js is the javascript webapp code, just copy paste










