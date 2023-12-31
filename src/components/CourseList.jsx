import React from 'react';
import useCourseStore from '../store/courseStore';

const CourseList = () => {
    const { courses, removeCourse, updateCourseStatus } = useCourseStore((state) => ({
        courses: state.courses,
        removeCourse: state.removeCourse,
        updateCourseStatus: state.updateCourseStatus,
    }));

    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {courses.map((course, i) => (
                    <div key={i} className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{course.title}</h5>
                                <p className="card-text">{course.description}</p>
                            </div>
                            <div className="card-footer">
                                <button
                                    className="btn btn-danger me-2"
                                    onClick={() => removeCourse(course.id)}
                                >
                                    Remove
                                </button>
                                <button
                                    className={`btn ${course.status ? 'btn-success' : 'btn-warning'}`}
                                    onClick={() => updateCourseStatus(course.id)}
                                >
                                    {course.status ? 'Complete' : 'Incomplete'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
