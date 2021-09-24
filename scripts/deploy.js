/* eslint-disable */

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log('Deploying contracts with the account:', deployer.address);

    console.log('Account balance:', (await deployer.getBalance()).toString());

     const TokenCreation = await ethers.getContractFactory("TokenCreation")
      
        // Start deployment, returning a promise that resolves to a contract object
     const tokenCreation = await TokenCreation.deploy()
     console.log("Contract deployed to address:", tokenCreation.address)
}
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error)
    process.exit(1)
})
  //0x60a40c73B333c4E6b056190048b4928A59AD4c1