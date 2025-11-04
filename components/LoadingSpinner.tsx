
import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-semibold text-slate-700">Analyzing your path...</p>
      <p className="text-sm text-slate-500">The AI is crafting your personalized degree plan.</p>
    </div>
  );
};
