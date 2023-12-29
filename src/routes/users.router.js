import { Router } from "express";
import { usersManager } from "../manager/usersManager.js";

const router = Router();

router.get("/", async (req, res)=>{
    try{
        const users = await usersManager.findAll();
        res.status(200).json({message: "Users", users});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get("/:idUser", async (req, res) =>{
    const {idUser} = req.params;
    try{
        const user = await usersManager.findById(idUser);
        res.status(200).json({message: "User", user});
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

router.delete("/:idUser", async (req, res)=>{
    const {idUser} = req.params;
    try{
        await usersManager.deleteOne(idUser);
        res.status(200).json({message: "User deleted:"});
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

router.post("/", async (req, res)=>{
    const {first_name, last_name, email, password, username} = req.body;
    if(!first_name||!last_name||!email||!password||!username){
        return res.status(400).json({message: "Some data is missing"});
    }
    try{
        const createdUser = await usersManager.createOne(req.body);
        res.redirect(`/home/${createdUser._id}`);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

export default router;