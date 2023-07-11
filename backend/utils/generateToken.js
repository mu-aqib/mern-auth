import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  // geenrate token
  const token = jwt.sign({ userId }, "123abc", {
    expiresIn: "1d",
  });

  //   create cookie and store the token
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 24 * 60 * 60 * 100, // 1 days
  });
};
