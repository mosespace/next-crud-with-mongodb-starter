"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export const courseContext = createContext();

export function Context({ children }) {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState([]);
  //   console.log(courses);

  useEffect(() => {
    async function fetchData() {
      try {
        const coursesResponse = await fetch("/api/courses");
        const coursesData = await coursesResponse.json();
        // console.log(coursesData);
        setCourses(coursesData.courses);
      } catch (error) {
        console.log("An Error Occurred While trying to Fetch Courses", error);
      }
    }
    fetchData();
  }, []);

  return (
    <courseContext.Provider value={{ courses, course }}>
      {children}
    </courseContext.Provider>
  );
}

export function useApi() {
  const context = useContext(courseContext);
  return context;
}
