const express = require('express');
const rolService = require('../services/rolService');
const router = express.Router();

router.get('/', async(req, res) =>{
    const rols = await rolService.getAllRols();
    res.json(rols);
})

router.get('/:id', async(req, res) =>{
    const rol = await rolService.getRollById(req.params.id);
    if(rol){
        res.status(201).json(rol);
    }
    else{
        res.status(404).json({message:'Rol not found'});
    }
})

router.post('/', async (req, res) =>{
    const newRol = await rolService.createRol(req.body);
    if(newRol){
        res.status(201).json(newRol);
    }
    else{
        res.status(404).json({message:'Roll not register'});
    }
})

router.put('/:id', async (req, res) =>{
    const updateRol = await rolService.updateRol(req.params.id,req.body);
    if(updateRol){
        res.status(201).json(updateRol);
    }
    else{
        res.status(404).json({message:'Rol not apdated'});
    }
})

router.delete('/:id', async (req, res) =>{
    const deleteRol = await rolService.deleteRol(req.params.id);
    if(deleteRol){
        res.status(200).send();
    }else{
        res.status(400).json({message:'Rol not deleted'});
    }
})

router.get('/users/:rolId', async (req, res)=>{
    try{
        const result = await rolService.getUsersByRol(req.params.rolId);
        res.json(result);
    }catch(error){
        if(error.message === 'Rol not found'){
            res.status(404).json({error:error.message});
        }
        else{
            res.status(500).json({error:error.message});
        }
    }
})

module.exports = router;