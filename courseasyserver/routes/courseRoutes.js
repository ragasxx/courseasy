import express from "express";
import {
  addLecture,
  createCourse,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseContoller.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// get all courses without lectures
router.route("/courses").get(getAllCourses);

// create new course only admin
router.route("/createcourse").post(singleUpload, createCourse);

//add lectures,delete course,get course details

router
  .route("/course/:id")
  .get(getCourseLectures)
  .post(singleUpload, addLecture);

// delete lectures lectures

export default router;
