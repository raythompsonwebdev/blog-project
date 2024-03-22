// import db  from "../database/connection.js";
// import bcrypt from "bcrypt";
// import crypto from "crypto";

export default function logoutUser(req, res) {
  const sid = req.signedCookies.sid;
  delete sessions[sid];
  res.clearCookie("sid");
  res.redirect("/posts");
}
