import React, { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration"

export const AppContext = createContext()

export const AppContextProvide = (props) => {
    const currency = import.meta.env.VITE_CURRENCY 
    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)
    const [enrolledCourses, setEnrolledCourses] = useState([])
    const navigate = useNavigate()
    // Fetch All Courses 
    const fetchAllCourses = async ()=>{
      setAllCourses(dummyCourses)
    }

   

    // Function to calculate average rating of course 
    const calculateRating = (course)=>{
      if(course.courseRatings.length === 0){
        return  0
      }
      let totalRatings = 0
      course.courseRatings.forEach(rating=>{
        totalRatings += rating.rating
      })
      return totalRatings / course.courseRatings.length
    }



    // Function to Calculate Course Chapter 
    const calCulateChapterTime = (Chapter)=>{
          let time = 0;
          Chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
          return humanizeDuration(time * 60 * 1000, {units:['h', 'm'] })
    }

    // Function to Calculate Course Duration
    const calCulateCourseDuration = (course)=>{
          let time = 0;
          course.courseContent.map((chapter)=> time += chapter.chapterContent).map((lecture)=> time += lecture.lectureDuration)
          return humanizeDuration(time * 60 * 1000, {units:['h', 'm'] })
    }

    // Function calculate to No of Lectures in the course 
    const calculateNoOfLectures = (course)=>{
      let totalLectures = 0;
      course.courseContent.forEach(chapter=>{
         if(Array.isArray(chapter.chapterContent)){
          totalLectures += chapter.chapterContent.length
         }
      })
      return totalLectures
    }
    
    const fetchUserEnrolledCourses = async()=>{
        setEnrolledCourses(dummyCourses)
    }
     useEffect(() => {
        fetchAllCourses()
        fetchUserEnrolledCourses()
    }, [])
    const value = {
      currency, allCourses, fetchUserEnrolledCourses, enrolledCourses, navigate, calculateRating, isEducator, setIsEducator, calCulateChapterTime, calCulateCourseDuration, calculateNoOfLectures, 
    }
  return (
    <div>
        <AppContext.Provider value={value}>
                {props.children}
        </AppContext.Provider>
    </div>
  )
}

