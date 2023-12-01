"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function EditForm({ data }) {
  const router = useRouter();
  const [newTitle, setNewNewTitle] = useState(data.title);
  const [newDescription, setNewDescription] = useState(data.description);

  async function handleSubmit(e) {
    e.preventDefault();
    const updatedCourse = {
      newTitle,
      newDescription,
    };

    const response = await fetch(
      `http://localhost:3000/api/courses/${data._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCourse),
      }
    );
    if (response.status == 201) {
      router.refresh();
      router.push("/");
    }
    // console.log(createdCourse);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter Course name'
        onChange={(e) => setNewNewTitle(e.target.value)}
        value={newTitle}
      />
      <input
        type='text'
        placeholder='Enter Course description'
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
      />
      <button type='submit'>Update Course</button>
    </form>
  );
}
