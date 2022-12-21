const hre = require('hardhat');
const deployedBytecode = require('rsk-testnet-bytecode.json');

async function checkBytecodeMatch({ name, rskBytecode}) {
    const harhatBytecode = 
        (await hre.artifact.readArtifact(name)).deployedBytecode;
        return {
            name, 
            matching: (harhatBytecode == rskBytecode),
        };
}

async function main() {
    try {
        const result = await Promise.all(
            deployedBytecodes.map(checkBytecodeMatch)
        );
    } catch (ex) {
        console.error(ex);
    }
}