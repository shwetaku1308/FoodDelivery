const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    // Get token from header
    const token = req.header("Authorization")?.split(" ")[1]; // Assuming Bearer token

    // Check if no token
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Contains userId from the token payload
        next();
    } catch (err) {
        res.status(401).json({ message: "Token is not valid" });
    }
};