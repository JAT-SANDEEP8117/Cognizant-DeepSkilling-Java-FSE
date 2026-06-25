import React from 'react';
import courses from '../data/courses';

// Component to render Course Details
function CourseDetails() {
  return (
    <div className="section-column course-section">
      <h2 className="section-heading">Course Details</h2>
      <div className="items-container">
        {/* Step 5: Display courses using map() with key={course.id} */}
        {courses.map((course) => (
          <div className="item-row course-item" key={course.id}>
            <h3 className="course-name">{course.name}</h3>
            <p className="course-date">{course.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;
