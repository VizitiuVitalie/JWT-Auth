import jwt from "jsonwebtoken";

function jwtTokens({ user_id, user_name, user_email }) {
  const user = { user_id, user_name, user_email };
  try {
    const accessToken = jwt.sign(user, `${process.env.ACCESS_TOKEN_SECRET}`, {
      expiresIn: "20s",
    });
    const refreshToken = jwt.sign(user, `${process.env.REFRESH_TOKEN_SECRET}`, {
      expiresIn: "5m",
    });
    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error creating JWT tokens:", error);
    throw new Error("Failed to create JWT tokens");
  }
}

export { jwtTokens };
