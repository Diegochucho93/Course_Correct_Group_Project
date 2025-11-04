
import React from 'react';
import type { DegreePlan, GraduationTimelineEntry } from '../types';
import { CourseCard } from './CourseCard';

interface PlanDisplayProps {
  plan: DegreePlan;
}

const TimelineIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const GraduationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" />
    </svg>
);


export const PlanDisplay: React.FC<PlanDisplayProps> = ({ plan }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Recommended Semester Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">
          Recommended Next Semester
        </h2>
        <p className="text-lg font-semibold text-indigo-600 mb-4">
          {plan.recommendedSemester.semesterName}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plan.recommendedSemester.courses.map((course) => (
            <CourseCard key={course.courseCode} course={course} />
          ))}
        </div>
      </div>

      {/* Graduation Timeline Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Projected Path to Graduation
        </h2>
        <div className="border-l-2 border-indigo-200 pl-6 space-y-8 relative">
          {plan.graduationTimeline.map((item, index) => (
            <div key={item.semesterName} className="relative">
              <div className="absolute -left-[34px] top-0.5 h-full">
                 <div className="w-4 h-4 bg-white border-2 border-indigo-500 rounded-full"></div>
              </div>
              <p className="font-semibold text-indigo-700 text-lg">{item.semesterName}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.courses.map((courseCode) => (
                  <span key={courseCode} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                    {courseCode}
                  </span>
                ))}
              </div>
            </div>
          ))}
           <div className="relative">
              <div className="absolute -left-[34px] top-0.5 h-full">
                <div className="w-4 h-4 bg-white border-2 border-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <p className="font-semibold text-green-700 text-lg flex items-center gap-2">
                <GraduationIcon />
                Graduation
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};
