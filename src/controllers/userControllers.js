const express = require('express');
const userService = require('../services/userService');
const router = express.Router();

router.get('/', async(req, res) =>{
    const users = await userService.getAllUsers();
    res.json(users);
})

router.get('/:id', async(req, res) =>{
    const user = await userService.getUserById(req.params.id);
    if(user){
        res.json(user);
    }
    else{
        res.status(404).json({message:'User not found'});
    }
})
module.exports = router;