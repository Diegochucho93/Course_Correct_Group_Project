
import React, { useState } from 'react';
import { AVAILABLE_MAJORS } from '../constants';

interface InputFormProps {
  onGeneratePlan: (major: string, completedCourses: string) => void;
  isLoading: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({ onGeneratePlan, isLoading }) => {
  const [major, setMajor] = useState<string>(AVAILABLE_MAJORS[0]);
  const [completedCourses, setCompletedCourses] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (major && completedCourses.trim()) {
      onGeneratePlan(major, completedCourses.trim());
    } else {
      alert('Please select a major and enter your completed courses.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">
          Select Your Major
        </label>
        <select
          id="major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {AVAILABLE_MAJORS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="completed-courses" className="block text-sm font-medium text-gray-700 mb-1">
          Enter Completed Courses
        </label>
        <textarea
          id="completed-courses"
          rows={8}
          value={completedCourses}
          onChange={(e) => setCompletedCourses(e.target.value)}
          placeholder="Enter one course code per line, e.g.,
CS 1301
MATH 1551
CHEM 1310"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
        />
        <p className="mt-1 text-xs text-gray-500">
          The more accurate your list, the better the recommendation.
        </p>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Generating Plan...' : 'Generate My Degree Plan'}
        </button>
      </div>
    </form>
  );
};
