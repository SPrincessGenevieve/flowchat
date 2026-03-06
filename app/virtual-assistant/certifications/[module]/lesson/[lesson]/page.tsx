"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import { PercentageChart } from "@/components/va/certifications/PercentageChart";
import { useModule } from "@/context/ModuleContext";
import { IconAlertCircle } from "@tabler/icons-react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ModulesPage() {
  const { modules, updateLessonStatus, completeLesson } = useModule();
  const router = useRouter();
  const [isResult, setIsResult] = useState(false);
  const [examResult, setExamResult] = useState("");
  const [answers, setAnswers] = useState<
    { questionId: string; answer: string }[]
  >([]);
  const [isPassed, setIsPassed] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [percent, setPercent] = useState(0);
  const params = useParams();
  const [open, setOpen] = useState(false);

  console.log("OPEN: ", open);

  const paramModule = params.module;
  const paramLesson = params.lesson;

  const module = modules.find((item) => item.id === paramModule);
  const lesson = module?.lessons.find((item) => item.id === paramLesson);
  const [isLocked, setIsLocked] = useState<String | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(lesson?.quiz[0]);
  const currentAnswer = answers.find(
    (a) => a.questionId === question?.id,
  )?.answer;

  useEffect(() => {
    setIsLocked(lesson?.status ?? null);
  }, [lesson?.status]);

  useEffect(() => {
    setQuestion(lesson?.quiz[questionIndex]);
  }, [questionIndex]);

  useEffect(() => {
    const saved = localStorage.getItem("quiz_answers");
    const savedIndex = localStorage.getItem("quiz_index");
    const savedResult = localStorage.getItem("is_result");
    const savedOpen = localStorage.getItem("is_open");

    if (savedIndex) {
      setQuestionIndex(Number(savedIndex));
    }

    if (saved) {
      setAnswers(JSON.parse(saved));
    }

    if (savedResult) {
      setIsResult(JSON.parse(savedResult));
    }

    if (savedOpen) {
      setOpen(JSON.parse(savedOpen));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quiz_answers", JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    localStorage.setItem("quiz_index", questionIndex.toString());
  }, [questionIndex]);

  useEffect(() => {
    localStorage.setItem("is_result", JSON.stringify(isResult));
  }, [isResult]);

  useEffect(() => {
    localStorage.setItem("is_open", JSON.stringify(open));
  }, [open]);

  const handleStart = () => {
    updateLessonStatus(module?.id ?? "", lesson?.id ?? "", "Pending");
  };

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => {
      const filtered = prev.filter((item) => item.questionId !== questionId);

      return [
        ...filtered,
        {
          questionId,
          answer: value,
        },
      ];
    });
  };

  const handleNext = () => {
    setQuestionIndex(questionIndex + 1);
  };

  const handleBack = () => {
    setQuestionIndex(questionIndex - 1);
  };

  const handleSubmit = () => {
    if (!lesson?.quiz) return;

    let correctCount = 0;

    answers.forEach((ans) => {
      const question = lesson.quiz.find((q: any) => q.id === ans.questionId);

      if (question && question.correctAnswer === ans.answer) {
        correctCount++;
      }
    });

    const totalQuestions = lesson.quiz.length;
    const computedScore = (correctCount / totalQuestions) * 100;
    setScore(correctCount);
    setPercent(computedScore);

    const passed = computedScore >= 80;

    setIsPassed(passed);
    setIsResult(true);

    if (passed) {
      updateLessonStatus(module?.id ?? "", lesson?.id ?? "", "Complete");
      completeLesson(module?.id ?? "", lesson?.id ?? "");
      localStorage.setItem("is_passed", JSON.stringify(true));
    } else {
      updateLessonStatus(module?.id ?? "", lesson?.id ?? "", "Pending");
      localStorage.setItem("is_passed", JSON.stringify(false));
      localStorage.setItem("quiz_wait_start", Date.now().toString());
    }
  };

  useEffect(() => {
    if (isResult === true) {
      setTimeout(() => {
        localStorage.removeItem("quiz_answers");
        localStorage.removeItem("quiz_index");
        setAnswers([]);
        setIsResult(false);
        router.replace("/virtual-assistant/certifications/");
        setQuestionIndex(0);
      }, 5000);
    }
  }, [isResult]);

  return (
    <div className=" space-y-6">
      {isLocked === null ? (
        <Skeleton className="w-full h-118 rounded-2xl"></Skeleton>
      ) : (
        <div className="flex flex-col gap-4 ">
          <Card className="bg-primary-blue-100/20 border border-primary-blue-100/70">
            <CardContent className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <Label className="text-[12px] font-semibold">
                  Question {questionIndex + 1}
                </Label>
                <Label>{question?.question}</Label>
              </div>
              <RadioGroup
                value={
                  answers.find((a) => a.questionId === question?.id)?.answer ||
                  ""
                }
                onValueChange={(value) =>
                  handleSelect(question?.id ?? "", value)
                }
                className="flex flex-col gap-2"
              >
                {question?.options.map((item, i) => (
                  <Card
                    key={i}
                    className={`p-0 transition-colors duration-300 ${
                      answers.find((a) => a.questionId === question?.id)
                        ?.answer === item
                        ? "bg-primary-blue-100/50 text-white"
                        : "bg-primary-blue-100/10"
                    }`}
                  >
                    <CardContent className="p-4 flex gap-2 items-center">
                      <RadioGroupItem
                        className="h-5 w-5"
                        value={item ?? ""}
                        id={item}
                      ></RadioGroupItem>
                      <Label htmlFor={item}>{item}</Label>
                    </CardContent>
                  </Card>
                ))}
              </RadioGroup>
              <div className="flex items-center gap-2">
                <IconAlertCircle
                  className="text-white"
                  size={18}
                ></IconAlertCircle>
                <Label className="font-normal">Passing score: 80%</Label>
              </div>
              <div className="flex items-center justify-end gap-2">
                {questionIndex > 0 && (
                  <Button
                    onClick={handleBack}
                    variant={"outline"}
                    className="bg-transparent text-primary-blue-100 border border-primary-blue-100 hover:bg-primary-blue-100/20 hover:text-white"
                  >
                    Back
                  </Button>
                )}
                {questionIndex < (lesson?.quiz.length ?? 0) - 1 ? (
                  <Button disabled={!currentAnswer} onClick={handleNext}>
                    Next Question
                  </Button>
                ) : (
                  <Dialog open={open}>
                    <DialogTrigger>
                      <Button
                        onClick={() => setOpen(true)}
                        disabled={!currentAnswer}
                        className="bg-primary-blue-100"
                      >
                        Submit Answers
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-primary-blue-500 shadow-[0_0px_14px_0_#ffffff79]">
                      <DialogHeader>
                        <DialogTitle className="text-white text-xl">
                          {isResult ? (
                            <div className="text-white text-center space-y-3">
                              <Label className="text-2xl font-bold">
                                {isPassed
                                  ? "You Passed the Exam"
                                  : "Exam Not Passed"}
                              </Label>
                            </div>
                          ) : (
                            "Confirm Submission"
                          )}
                        </DialogTitle>
                        <DialogDescription className="text-white/70">
                          {isResult ? (
                            <div className="flex flex-col gap-4">
                              <Label className="font-normal leading-5 text-white/70">
                                {isPassed
                                  ? "Congratulations! You have successfully met the passing score requirement."
                                  : "Unfortunately, you did not meet the required passing score. Please review the material and try again after the waiting period."}
                              </Label>
                              <div className="flex flex-col items-center justify-center">
                                <div className="w-50">
                                  <PercentageChart
                                    score={score}
                                    percent={percent}
                                  ></PercentageChart>
                                </div>
                              </div>
                            </div>
                          ) : (
                            "Once submitted, your exam will be locked. Please review your answers carefully. There is a 15-minute waiting period before you can retake the exam."
                          )}
                        </DialogDescription>
                        <DialogFooter>
                          {isResult ? (
                            <div className="w-full flex items-center justify-center">
                              <Label className="font-normal">
                                Redirecting you back...
                              </Label>
                            </div>
                          ) : (
                            <>
                              <DialogClose>
                                <Button
                                  onClick={() => setOpen(false)}
                                  variant={"ghost"}
                                  className="bg-transparent hover:bg-primary-blue-100/20 border border-primary-blue-100 hover:text-white text-primary-blue-100"
                                >
                                  Review
                                </Button>
                              </DialogClose>
                              <Button onClick={handleSubmit}>Submit</Button>
                            </>
                          )}
                        </DialogFooter>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
