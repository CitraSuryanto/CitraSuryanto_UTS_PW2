const wisata = require("../model/wisata");

const createwisata= (req, res) => {
    const wisata = new wisata({
        nama_wisata : req.body.nama_wisata,
        lokasi : req.body.lokasi,
        keterangan : req.body.keterangan
    });
    wisata.save().then((createdwisata)=>{
        res.status(201).json({
                message : "Data berhasil disimpan",
                wisataId : createdwisata._id
        });
    });
};

const readwisata = (req, res)=>{
    wisata.find()
    .then((documents)=>{
        res.status(201).json({
            message : "Get Data Wisata",
            citrasuryanto : documents
        });
    });
};
const deletewisata= (req, res) => {
    wisata.deleteOne({_id : req.params.id})
    .then((result)=>{
        res.status(200).json({
            message : "wisata berhasil dihapus ",
            result : result
        });
    });
};

const updatewisata = (req, res) => {
   
     const wisata = new wisata({
        _id : req.params.id,
        nama_wisata : req.body.nama_wisata,
        lokasi : req.body.lokasi,
        keterangan : req.body.keterangan
    });


    wisata.updateOne({_id : req.params.id}, wisata)
    .then((hasil)=>{
        res.status(200).json({
            message : "Update Berhasil",
            result : hasil    
        });
    });


};


module.exports = {createwisata,readwisata,deletewisata,updatewisata}
