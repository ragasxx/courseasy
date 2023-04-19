import express from "express";
import { createCourse, getAllCourses } from "../controllers/courseContoller.js";

const router = express.Router();


// get all courses without lectures
router.route("/courses").get(getAllCourses);

// create new course only admin
router.route("/createcourse").post(createCourse);

//add lectures,delete course,get course details



// delete lectures lectures




export default router;