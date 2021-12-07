const {ethers} = require("hardhat");

async function main() {
  const FACTORY_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const Weth_address = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

  const Router = await ethers.getContractFactory("EnochV1Router02");
  const router = await Router.deploy(FACTORY_ADDRESS, Weth_address);

  await router.deployed();

  console.log("Router deployed at:", router.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
