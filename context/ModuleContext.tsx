"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { LessonT, ModuleT } from "@/lib/type";
import { modulesData } from "@/lib/module/modules-data";

interface ModuleContextType {
  modules: ModuleT[];
  completeLesson: (moduleId: string, lessonId: string) => void;
  resetProgress: () => void;
  updateLessonStatus: (
    moduleId: string,
    lessonId: string,
    status: LessonT["status"],
  ) => void;
}

const ModuleContext = createContext<ModuleContextType | undefined>(undefined);

export function ModuleProvider({ children }: { children: React.ReactNode }) {
  const [modules, setModules] = useState<ModuleT[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lms_progress");

      if (saved) {
        try {
          const parsed = JSON.parse(saved);

          // ✅ Check if stored data matches module seed count
          if (Array.isArray(parsed) && parsed.length === modulesData.length) {
            return parsed;
          }
        } catch {
          localStorage.removeItem("lms_progress");
        }
      }
    }

    return modulesData;
  });

  useEffect(() => {
    localStorage.setItem("lms_progress", JSON.stringify(modules));
  }, [modules]);

  const completeLesson = (moduleId: string, lessonId: string) => {
    setModules((prev) =>
      prev.map((mod) => {
        if (mod.id !== moduleId) return mod;

        const lessons = mod.lessons.map((lesson) => ({ ...lesson }));

        const index = lessons.findIndex((l) => l.id === lessonId);

        if (index !== -1) {
          lessons[index].status = "Complete";

          if (index + 1 < lessons.length) {
            lessons[index + 1].isLocked = false;
            lessons[index + 1].status =
              lessons[index + 1].status === "Locked"
                ? "Pending"
                : lessons[index + 1].status;
          }
        }

        const allCompleted = lessons.every((l) => l.status === "Complete");

        return {
          ...mod,
          lessons,
          status: allCompleted ? "Complete" : "Pending",
        };
      }),
    );
  };

  const updateLessonStatus = (
    moduleId: string,
    lessonId: string,
    status: "Complete" | "Pending" | "Locked",
  ) => {
    setModules((prev) =>
      prev.map((mod) => {
        if (mod.id !== moduleId) return mod;

        return {
          ...mod,
          lessons: mod.lessons.map((lesson) =>
            lesson.id === lessonId ? { ...lesson, status } : lesson,
          ),
        };
      }),
    );
  };

  const resetProgress = () => {
    localStorage.removeItem("lms_progress");
    setModules(modulesData);
  };

  return (
    <ModuleContext.Provider
      value={{ modules, completeLesson, updateLessonStatus, resetProgress }}
    >
      {children}
    </ModuleContext.Provider>
  );
}

export const useModule = () => {
  const context = useContext(ModuleContext);
  if (!context) throw new Error("useModule must be used within ModuleProvider");
  return context;
};
