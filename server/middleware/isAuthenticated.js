import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User is not authenticated",
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    if (!decode) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }

    // Save user ID
    req.id = decode.userId;

    next();
  } catch (error) {
    console.log("Auth Middleware Error:", error);
    return res.status(500).json({
      success: false,
      message: "Authentication failed",
    });
  }
};

export default isAuthenticated;


