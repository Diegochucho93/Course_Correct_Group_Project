
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Personalized Degree Path Assistant
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-1">
          Your AI-powered guide to a seamless academic journey.
        </p>
      </div>
    </header>
  );
};
