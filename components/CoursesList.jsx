"use client";
import React from "react";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { useApi } from "@/app/context/context";
export default function CoursesList() {
  const { courses } = useApi();
  // console.log(courses);
  return (
    <div className='courses-list'>
      {courses?.map((course) => {
        return (
          <div className='course' key={course._id}>
            <div className='course-details'>
              <h2 className='course-title'>{course.title}</h2>
              <p className='description'>{course.description}</p>
            </div>
            <div className='course-actions'>
              <DeleteBtn id={course._id} />
              <Link
                className='edit'
                href={`/edit-course/${course._id}`}
                title='Edit'
              >
                <HiPencilAlt size={32} />
              </Link>
              <Link href={`/courses/${course._id}`} title='View '>
                <AiOutlineEye size={32} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
