import React from "react";

export default async function getCourse(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/courses/${id}`);
    const course = await response.json();
    return course.data;
    console.log(course);
  } catch (error) {
    console.log(error);
  }
}
