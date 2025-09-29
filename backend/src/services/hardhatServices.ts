 import hre from "hardhat";

export default class HardhatService{
 async compile(){ await hre.run("compile"); return {ok:true}; }
 async deploy(contractName:string,args:any[]=[]){
   const Factory=await hre.ethers.getContractFactory(contractName);
   const contract=await Factory.deploy(...args); await contract.deployed();
   return {address:contract.address,abi:Factory.interface.format("json")};
 }
}