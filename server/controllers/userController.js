import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered with this email.",
      });
    }
    // using Bcrypt

    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Account created successfully.",
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Login API

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const existingUser = await UserModel.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const isPasswordMatched = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Usig JWT

    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    // using cookie when login successfull

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .json({
        success: true,
        message: `Welcome back ${existingUser.fullName}`,
      });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      success: true,
      message: " user logout successfuly",
    });
  } catch (error) {
    console.log(error);
  }
};

export { logout };
