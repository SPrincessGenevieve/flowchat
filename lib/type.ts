export interface QuizQuestionT {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface LessonT {
  id: string;
  title: string;
  content: string;
  quiz: QuizQuestionT[];
  status: "Complete" | "Pending" | "Locked";
  isLocked: boolean;
  href: string;
}

export interface ModuleT {
  id: string;
  title: string;
  desc: string;
  lessons: LessonT[];
  status: "Complete" | "Pending" | "Locked";
}
