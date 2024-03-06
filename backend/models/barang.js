import mongoose from "mongoose"

const Barang = mongoose.Schema({
    nama:{
        type:String,
        required: true
    },
    harga:{
        type:String,
        required: true
    },
    gambar:{
        type:String,
        required: true
    },
    date:{
        type:Date,
    }
});

export default mongoose.model("Barang",Barang)