const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  if (password.length < 6) {
    return res.status(400).json({ msg: "Password must be at least 6 characters" });
  }

  try {
    
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
    });

    res.json({ msg: "Signup successful" });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ msg: "Signup failed" });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password required" });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" } 
    );

    res.json({ token });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ msg: "Login failed" });
  }
};