const hre = require("hardhat");

async function main() {
  const BlockchainVoting = await hre.ethers.getContractFactory(
    "BlockchainVoting"
  );

  const adminAddress = `0xd82da95af5E1D01Ce1db23913Ba6a3FbbCD7206c`
  const contract = await BlockchainVoting.deploy(adminAddress);
 
  await contract.deployed();

  console.log(`ContractAddress : ${contract.address}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
