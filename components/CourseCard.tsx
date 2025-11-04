
import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5 flex flex-col justify-between h-full transition-shadow hover:shadow-xl">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-800">{course.courseCode}</h3>
          <span className="px-2.5 py-0.5 text-xs font-semibold text-indigo-800 bg-indigo-100 rounded-full">
            {course.credits} Credits
          </span>
        </div>
        <p className="text-md text-slate-600 mb-4">{course.courseName}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500 border-t pt-3 mt-3">
          <span className="font-semibold text-gray-600">Why this course? </span>
          {course.reason}
        </p>
      </div>
    </div>
  );
};
