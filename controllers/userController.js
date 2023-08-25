const { response } = require("express");
const userModel = require("../models/userModel");

//Login Controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email:email, password:password });
    if (!user) {
      return res.status(404).send("User NOT Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
//REgister Controller

const registerController = async(req,res) => {
    try {
        const newUser=new userModel(req.body)
        await newUser.save()
        res.status(201).json({
            success:true,
            newUser,
        }) 
    } catch (error) {
        res.status(400).json({
            succes:false,
            error
        })
    }
};

module.exports = { loginController, registerController };
