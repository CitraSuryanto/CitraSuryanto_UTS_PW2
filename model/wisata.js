const mongoose = require("mongoose");

const wisataSchema = new mongoose.Schema({
    namaWisata : {type : String, required : true},
    lokasi : {type : String, required : true},
    keterangan : {type : String, required : true}
});

module.exports = mongoose.model("wisata",wisataSchema);