import express from "express"
import multer from  "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join (__dirname,"../../frontend/public/images"));
    },
    filename: function(req, file, cb) {
      cb(null,`image-${Date.now()}. ${file.originalname}`);
    },
  });

  const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allowd"))
    }
}
const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});