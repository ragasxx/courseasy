import express from "express";
import {
  changePassword,
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  resetPassword,
  updateProfile,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// registration

router.route("/register").post(register);

// login
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// get my profile

router.route("/me").get(isAuthenticated, getMyProfile);

// change password
router.route("/changepassword").put(isAuthenticated, changePassword);

// update profile

router.route("/updateprofile").put(isAuthenticated, updateProfile);

// forget password

router.route("/forgetpassword").post(forgetPassword);

// reset password

router.route("/resetpassword/:token").put(resetPassword);

export default router;
