import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Course } from "../models/Course.js";
import getDataUri from "../utils/dataUri.js";
import ErrorHandler from "../utils/errorHandler.js";
import cloudinary from "cloudinary";
export const getAllCourses = catchAsyncError(async (req, res, next) => {
  const courses = await Course.find().select("-lectures");

  res.status(200).json({
    success: true,
    courses,
  });
});

export const createCourse = catchAsyncError(async (req, res, next) => {
  const { title, description, createdBy, category } = req.body;

  if (!title || !description || !createdBy || !category)
    return next(new ErrorHandler("Please add all fields", 400));

  const file = req.file;
  const fileUri = getDataUri(file);
  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

  await Course.create({
    title,
    description,
    createdBy,
    category,
    poster: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },  
  });

  res.status(201).json({
    success: true,
    message: "Course created successfully.You can add lectures now",
  });
});

// get course details

export const getCourseLectures = catchAsyncError(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  console.log(course);

  if (!course) return next(new ErrorHandler("Course doesn't exist", 404));

  course.views += 1;

  await course.save();

  res.status(200).json({
    success: true,
    lectures: course.lectures,
  });
});

export const addLecture = catchAsyncError(async (req, res, next) => {
  const { title, description } = req.body;

  const course = await Course.findById(req.params.id);

  console.log(course);

  if (!course) return next(new ErrorHandler("Course doesn't exist", 404));

  // upload file from cloudinary

  course.lectures.push({
    title,
    description,
    video: {
      public_id: "temp",
      url: "temp",
    },
  });

  course.numOfVideos = course.lectures.length;

  await course.save();

  res.status(200).json({
    success: true,
    message: "lecture added in course",
  });
});











