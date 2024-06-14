import React, { useState } from "react";
import useCourseStore from "../store/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const courses = useCourseStore((state) => state.courses);

  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  console.log("Course form rendered");
  const generateUniqueId = () => {
    let newId;
    do {
      newId = Math.ceil(Math.random() * 1000000);
    } while (courses.some((course) => course.id === newId));
    return newId;
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (!courseTitle || !courseDescription) {
      return alert("Please add a course!");
    }

    const newCourse = {
      id: generateUniqueId(),
      title: courseTitle,
      description: courseDescription,
    };

    addCourse(newCourse);
    setCourseTitle("");
    setCourseDescription("");
  };

  return (
    <div className="w-100 d-flex justify-content-center my-5">
      <form
        onSubmit={handleFormSubmission}
        class="d-flex flex-column gap-3 w-100"
      >
        <h3 className="text-center text-uppercase fw-bold">Course List</h3>
        <div className="w-100">
          <input
            id="courseTitle"
            type="text"
            placeholder="Title"
            className="form-control"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
          <textarea
            id="courseDescription"
            type="text"
            placeholder="Description"
            className="form-control mt-2"
            rows={5}
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary rounded-1">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
