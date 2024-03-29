var express = require('express')
var UserModel = require("../models/user.js")
var userRoutes = express.Router();
//receive all users
userRoutes.get("/", async (req,res)=>{
  try {
    const userList = await UserModel.find()
    res.status(200).send(userList)
  } catch (error) { 
    res.status(404).send(error)
  }
})

userRoutes.post('/signup', async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password, email } = req.body;

    // Check if username already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user instance
    const newUser = new UserModel({
      username,
      password, // Note: In production, you should hash the password before saving it
      email
    });

    // Save the new user to the database
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

userRoutes.post("/login",  async (req,res) =>{
  try {
    const { username, password } = req.body;

    // Find user by username and password
    const foundUser = await UserModel.findOne({ username, password });

    if (foundUser) {
      // User found, send success response
      return res.status(200).json({
        status: true,
        username: foundUser.username,
        message: `${foundUser.username} was logged in successfully`
      });
    } else {
      // User not found, send failure response
      return res.status(401).json({
        status: false,
        message: "Incorrect username or password"
      });
    }
  } catch (error) {
    // Internal server error
    console.error("Error occurred during login:", error);
    return res.status(500).json({
      status: false,
      message: "An error occurred during login"
    });
  }
})





module.exports = userRoutes