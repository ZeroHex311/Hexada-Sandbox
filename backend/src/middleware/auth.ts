 import jwt from "jsonwebtoken";

export function authMiddleware(req,res,next){
 const token=req.headers.authorization?.split(" ")[1];
 if(!token) return res.status(401).json({ok:false});
 try{
   req.user=jwt.verify(token,process.env.JWT_SECRET||"devsecret");
   next();
 }catch{return res.status(401).json({ok:false})}
}