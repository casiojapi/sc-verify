# verify sc

trust and verify - verify source code of sc in order to trust that it does what it says. 

at minimum, anyone can see your sc bytecode, thus can reverse engineer it. So it cannot be that private.


### verify - local (independent verify)
get the supposed source code, compile and get the bytecode. Go to the explorer of the X blockchain you are verifying the sc, and get the deployed bytecode. 

Now you can diff both bytecode outputs, and check if indeed they are the same. 


### verify - explorer

+ flatten solidity code - (npx harhat flatten Contract.sol > con-flattened.sol)

+ verify explorer - go to contract address, verify tab. Add the data required (upload the flattened solidity source code file) [it is important to select the same exact compiler]
now anyone can see ABI and verified source code.