"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useUserContext } from "@/context/UserContext";
import {
  CertificationT,
  mockDataCertAdmin,
} from "@/app/admin/certifications/page";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { IconCircle, IconCircleCheck } from "@tabler/icons-react";

export default function CertPhase() {
  const { selectVA } = useUserContext();
  const [data, setData] = useState<CertificationT>();

  useEffect(() => {
    const filter = mockDataCertAdmin.find((i) => i.email === selectVA);
    setData(filter);
  }, [selectVA]);

  const phaseLabels: Record<number, string> = {
    0: "Phase 1: Onboarding",
    1: "Phase 2: Technical Review",
    2: "Phase 3: Live Performance",
  };

  return (
    <div className="flex flex-col gap-4">
      {[...Array(3)].map((_, i) => {
        const filterData =
          i < 1
            ? data?.progress.slice(0, 5)
            : i < 2
              ? data?.progress.slice(6, 9)
              : data?.progress.slice(10, 14);

        const phaseLessons = [0, 1, 2].map((i) => {
          const filterData =
            i === 0
              ? data?.progress.slice(0, 5)
              : i === 1
                ? data?.progress.slice(5, 9)
                : data?.progress.slice(9, 14);

          return { index: i, detail: filterData };
        });

        const completedCount =
          phaseLessons[i].detail?.filter((lesson) => lesson.status === "Completed")
            .length ?? 0;

        const totalLessons = phaseLessons[i].detail?.length ?? 1;
        const progressPercent = (completedCount / totalLessons) * 100;

        console.log("PHASE: ", phaseLessons);

        return (
          <div key={i} className="flex flex-col gap-4">
            <Card className="bg-black/20 border border-primary-blue-100/70">
              <CardContent>
                <div>
                  {phaseLabels[i] && (
                    <div className="flex flex-col gap-4  mb-6">
                      <div className="flex justify-between gap-4">
                        <div>
                          <Label>{phaseLabels[i]}</Label>
                        </div>
                        <div className="flex gap-4">
                          {completedCount === totalLessons && (
                            <div className="bg-green-700/50 p-1 px-2 rounded-sm">
                              <Label className="text-green-400">Passed</Label>
                            </div>
                          )}

                          <Label>
                            {completedCount}/{totalLessons}
                          </Label>
                        </div>
                      </div>

                      <Progress
                        className="bg-primary-blue-100/20"
                        value={progressPercent}
                      ></Progress>
                    </div>
                  )}

                  <div className="flex flex-col gap-4">
                    {phaseLessons[i]?.detail?.map((item2, ii) => (
                      <Card key={ii} className="bg-primary-blue-100/20">
                        <CardContent>
                          <div className={`flex items-start gap-2`}>
                            <div>
                              {item2.status === "Completed" ? (
                                <IconCircleCheck
                                  className="text-green-400"
                                  size={18}
                                ></IconCircleCheck>
                              ) : (
                                <IconCircle
                                  size={18}
                                  className="text-primary-blue-100/70"
                                ></IconCircle>
                              )}
                            </div>
                            <div className="flex flex-col gap-2">
                              <Label className="">{item2.lesson}</Label>
                              <Label className="font-normal text-white/70">
                                {item2.date}
                              </Label>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
