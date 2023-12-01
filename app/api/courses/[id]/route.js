import mongodbConnecter from "@/libs/mongodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export async function GET(request, { param: { id } }) {
  try {
    // Getting the data from the database
    await mongodbConnecter();

    //get the data using the model
    const course = await Course.findOne({ _id: id });

    return NextResponse.json(
      {
        message: "Successful Fetched A Course By It's ID From the DataBase",
        data: course,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "There was a problem which led to unsuccessful Fetch of a single Course",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

// Update a course using the POST method;
export async function PUT(request, { params: { id } }) {
  try {
    //Get the data from the request
    const { newTitle: title, newDescription: description } =
      await request.json();
    const newCourse = {
      title,
      description,
    };

    // connecting to the database------------ from the libs
    await mongodbConnecter();

    // Use the model to update a course
    await Course.findByIdAndUpdate(id, newCourse);

    return NextResponse.json(
      {
        message: "Successful PUT / Update request",
        data: newCourse,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unsuccessful PUT / Update request",
        error,
      },
      { status: 500 }
    );
  }
}
