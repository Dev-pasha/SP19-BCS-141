


exports.checkController=(req,res,next)=>{

   res.status(200).json({
       success:true,
       message:"You are authorized to access this route"
   })
}
