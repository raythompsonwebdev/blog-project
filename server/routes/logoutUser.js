// import db  from "../database/connection.js";

function logoutUser(request, response) {
  response.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  return response
    .status(200)
    .json({ loggedIn: false, message: "user logged out" });
}

export default logoutUser;
