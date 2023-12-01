import Course from "@/models/course";
import mongodbConnecter from "@/libs/mongodb";
import { NextResponse } from "next/server";

// Using the GET method;
export async function GET(request) {
  try {
    // Getting the data from the database
    await mongodbConnecter();

    //get the data using the model
    const courses = await Course.find();

    return NextResponse.json(
      {
        message: "Successful Fetched All Available Course From the DataBase",
        courses,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "There was a problem which led to Unsuccessful Fetch",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

// creating a course using the POST method;
export async function POST(request) {
  try {
    //Get the data from the request
    const { title, description } = await request.json();
    const newCourse = {
      title,
      description,
    };

    // connecting to the database------------ from the libs
    await mongodbConnecter();

    // Use the model to create a new course
    await Course.create(newCourse);

    return NextResponse.json(
      {
        message: "Successful POST request",
        data: newCourse,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unsuccessful POST request",
        error,
      },
      { status: 500 }
    );
  }
}

// Delete a course using the DELETE method;
export async function DELETE(request) {
  try {
    //Get the id of the course
    const id = request.nextUrl.searchParams.get("id");
    // console.log(id);

    //connect to mongodb
    await mongodbConnecter();

    // Use the model to delete
    await Course.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: "You have deleted the course successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "There was an error while trying to delete the course",
        error,
      },
      { status: 500 }
    );
  }
}
