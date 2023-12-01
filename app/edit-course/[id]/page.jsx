import EditForm from "@/components/EditForm";
import getCourse from "@/controllers/getSingleCourse";
import React from "react";

export default async function EditCourse({ params: { id } }) {
  const course = await getCourse(id);
  return (
    <>
      <EditForm data={course} />
    </>
  );
}
