
export const AVAILABLE_MAJORS = [
  'Computer Science',
  'Business Administration',
  'Psychology',
  'Nursing',
];

export const DEGREE_PLANS: Record<string, string> = {
    'Computer Science': `
      Simplified Bachelor of Science in Computer Science Degree Plan
      Total Credits: 120

      Core Requirements:
      - CS 1301: Introduction to Computing (Prereq: None)
      - CS 1331: Introduction to Object-Oriented Programming (Prereq: CS 1301)
      - CS 2110: Computer Organization and Programming (Prereq: CS 1331)
      - CS 2340: Objects and Design (Prereq: CS 1331)
      - CS 3510: Design and Analysis of Algorithms (Prereq: CS 2110, MATH 2603)
      - CS 4400: Introduction to Database Systems (Prereq: CS 2340)
      - CS 4641: Machine Learning (Prereq: CS 3510, MATH 3215)
      
      Math Requirements:
      - MATH 1551: Differential Calculus (Prereq: None)
      - MATH 1552: Integral Calculus (Prereq: MATH 1551)
      - MATH 2603: Introduction to Discrete Mathematics (Prereq: MATH 1552)
      - MATH 3215: Introduction to Probability and Statistics (Prereq: MATH 1552)

      Science Requirements (pick 2):
      - PHYS 2211: Introductory Physics I (Prereq: MATH 1551)
      - CHEM 1310: General Chemistry (Prereq: None)
      - BIOL 1510: Biological Principles (Prereq: None)

      General Electives: 15 credits of any course.
    `,
};
