
import { GoogleGenAI, Type } from '@google/genai';
import type { DegreePlan } from '../types';
import { DEGREE_PLANS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    recommendedSemester: {
      type: Type.OBJECT,
      properties: {
        semesterName: { type: Type.STRING, description: "e.g., Fall 2024" },
        courses: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              courseCode: { type: Type.STRING },
              courseName: { type: Type.STRING },
              credits: { type: Type.INTEGER },
              reason: { type: Type.STRING, description: "Explain why this course is recommended now (e.g., prerequisite for future courses, core requirement)." },
            },
            required: ['courseCode', 'courseName', 'credits', 'reason'],
          },
        },
      },
      required: ['semesterName', 'courses'],
    },
    graduationTimeline: {
      type: Type.ARRAY,
      description: "A projected timeline of future semesters to graduation.",
      items: {
        type: Type.OBJECT,
        properties: {
          semesterName: { type: Type.STRING },
          courses: {
            type: Type.ARRAY,
            items: { type: Type.STRING, description: "Course code, e.g., CS 3510" },
          },
        },
        required: ['semesterName', 'courses'],
      },
    },
  },
  required: ['recommendedSemester', 'graduationTimeline'],
};

export const generateDegreePlan = async (major: string, completedCourses: string): Promise<DegreePlan> => {
  const degreePlanText = DEGREE_PLANS[major];
  if (!degreePlanText) {
    throw new Error(`Degree plan for ${major} is not available.`);
  }

  const systemInstruction = `You are an expert academic advisor AI. Your task is to create a personalized degree plan for a college student. 
  1. Analyze the provided degree plan for the student's major.
  2. Review the list of courses the student has already completed.
  3. Identify the remaining required courses.
  4. Recommend an optimal, conflict-free schedule for the very next semester, considering all prerequisites. A typical course load is 4-5 courses (12-16 credits).
  5. Provide a clear reason for each recommended course.
  6. Project a simple, high-level timeline for the remaining semesters until graduation.
  You must output your response in the specified JSON format.`;

  const prompt = `
    Major: ${major}
    Degree Plan: ${degreePlanText}
    Completed Courses (one per line):
    ${completedCourses}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.3,
      },
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as DegreePlan;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate degree plan from AI. The model may have returned an invalid response.");
  }
};
