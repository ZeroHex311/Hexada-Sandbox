 import { spawn } from "child_process";

export default class EphemeralHardhatManager{
 users=new Map();
 async startNode(userId:string){
   if(this.users.has(userId)) return this.users.get(userId).port;
   const port=8545+this.users.size;
   const proc=spawn("npx",["hardhat","node",`--port=${port}`],{stdio:"pipe"});
   proc.stdout.on("data",d=>console.log(`[HH ${userId}]: ${d}`));
   this.users.set(userId,{process:proc,port,lastActive:Date.now()});
   return port;
 }
}