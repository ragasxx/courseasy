import { server } from "../Store";
import axios from "axios";



export const getAllCourses = (category="",keyword="")=> async dispatch=>{
try {
    dispatch({type:"allCoursesRequest"});
    
    const {data} = await axios.get(`${server}/courses?category=${category}&keyword=${keyword}`);

    dispatch({type:"allCoursesSuccess",payload:data.courses})

} catch (error) {
    dispatch({
        type:"allCoursesFail",
        payoad:error.response.data.message,
    })
}
}