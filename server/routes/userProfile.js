import { verifyJwt } from "../utils/jwt-helpers.js";

export default async function userProfile(request, response) {
  const { jwt } = request.signedCookies;
  if (!jwt) {
    return response.status(401).json({
      loggedIn: false,
      message: "user not authenticated",
      token: "",
    });
  } else {
    const verToke = verifyJwt(jwt);
    console.log(`token verified : ${verToke}`);
    return response.json({
      loggedIn: true,
      message: "user authenticated",
      token: verToke,
    });
  }
}
