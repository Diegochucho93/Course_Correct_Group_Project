
import React from 'react';

export const WelcomeMessage: React.FC = () => {
  return (
    <div className="text-center p-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg">
      <h2 className="text-xl font-semibold text-slate-700">Ready to Plan Your Future?</h2>
      <p className="mt-2 text-slate-500">
        Select your major, enter the courses you've completed, and let our AI assistant generate an optimized semester plan and timeline to graduation for you.
      </p>
    </div>
  );
};
