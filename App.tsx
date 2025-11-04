
import React, { useState } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { PlanDisplay } from './components/PlanDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { WelcomeMessage } from './components/WelcomeMessage';
import type { DegreePlan } from './types';
import { generateDegreePlan } from './services/geminiService';

const App: React.FC = () => {
  const [plan, setPlan] = useState<DegreePlan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePlan = async (major: string, completedCourses: string) => {
    setIsLoading(true);
    setError(null);
    setPlan(null);
    try {
      const result = await generateDegreePlan(major, completedCourses);
      setPlan(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please check the console for details.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-200">
          <InputForm onGeneratePlan={handleGeneratePlan} isLoading={isLoading} />
          
          {error && (
            <div className="mt-8 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg">
              <p className="font-semibold">Error Generating Plan</p>
              <p>{error}</p>
            </div>
          )}
          
          <div className="mt-8">
            {isLoading && <LoadingSpinner />}
            {!isLoading && !plan && !error && <WelcomeMessage />}
            {plan && <PlanDisplay plan={plan} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
