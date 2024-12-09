const express = require('express')
const router = express.Router()

const Note = require('./note')

router.post('/addNote', async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.send({ status: true, message: "Notes Added !!!" })
    } catch (error) {
        res.send({ status: false, message: error.message })
    }
}); 

router.get('/getNote', async (req, res) => {
    try {
        const note = await Note.find();
        res.send({ status: true, message: note })
    } catch (error) {
        res.send({ status: false, message: error.message })
    }
});

router.get('/getNote/:id',async(req,res)=>{
    try{
        const id = req.params.id
        console.log(id)
        const note = await Note.findById(id)
        if(!note){
            res.send({status: false,message: "Notes Not Found !!!!"})
        } else {
            res.send({status: true,message: note})
        }
    }catch(error){
        res.send({status: false,message: error.message})
    }
})

router.put('/updateNote/:id', async (req, res) => {
    try {
        const id = req.params.id
        const note = await Note.findByIdAndUpdate(id, req.body, { new: true });
        if (!note) {
            res.send({ status: false, message: "Notes Not Found !!!!" })
        } else {
            res.send({ status: true, message: "Notes Updated Successfully !!!!" })
        }
    } catch (error) {
        res.send({ status: false, message: error.message })
    }
});


router.delete('/deleteNote/:id', async (req, res) => {
    try {
        const id = req.params.id
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            res.send({status:false,message:"Notes Not Found !!!!"})
        }
        else {
            res.send({status:true,message:"Notes Deleted Successfully !!!!"})
        }
    } catch(error){
        res.send({status:false,message:error.message})
    }
});

module.exports = router