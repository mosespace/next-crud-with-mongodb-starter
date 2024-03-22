import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";

export default function DeleteBtn({ id }) {
  const router = useRouter();
  async function handleDelete() {
    Swal.fire({
      title: "Do you want to delete the course?",
      showDenyButton: true,
      confirmButtonText: "Yes, i want",
      denyButtonText: `No, i don't`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch(
          `http://localhost:3000/api/courses?id=${id}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          router.refresh();
        }
      } else if (result.isDenied) {
        Swal.fire("Course not deleted", "", "info");
      }
    });
  }

  return (
    <button onClick={handleDelete}>
      <MdOutlineDelete size={32} />
    </button>
  );
}
