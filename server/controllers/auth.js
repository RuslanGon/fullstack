import User from "../models/User.js";
import bcrypt from 'bcryptjs'

// Registor user
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUsed = await User.findOne({username})
    if(isUsed){
        return res.json({
            message: 'Данный username уже занят.',
        })
    }
    const salt = bcrypt.genSaltSync(10)
  } catch (error) {
    console.log(error);
  }
};
// Login user
export const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

// Get me
export const getme = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
