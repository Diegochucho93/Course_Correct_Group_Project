
export interface Course {
  courseCode: string;
  courseName: string;
  credits: number;
  reason: string;
}

export interface Semester {
  semesterName: string;
  courses: Course[];
}

export interface GraduationTimelineEntry {
  semesterName: string;
  courses: string[];
}

export interface DegreePlan {
  recommendedSemester: Semester;
  graduationTimeline: GraduationTimelineEntry[];
}
