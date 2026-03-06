"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

export const description = "A radial chart with text";

interface ChartT {
  score: number;
  percent: number;
}

export function PercentageChart({ score, percent }: ChartT) {
  const chartData = [
    {
      browser: "safari",
      score: percent,
      fill: percent < 80 ? "var(--destructive)" : "var(--primary-green-100)",
    },
  ];

  const chartConfig = {
    Score: {
      label: "Score",
    },
    safari: {
      label: "Safari",
      color: percent < 80 ? "var(--destructive)" : "var(--primary-green-100)",
    },
  } satisfies ChartConfig;

  const maxAngle = 360;
  const endAngle = (percent / 100) * maxAngle;

  console.log("end", endAngle);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-62.5"
    >
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={endAngle}
        innerRadius={80}
        outerRadius={110}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-primary-blue-100/20 last:fill-primary-blue-500"
          polarRadius={[86, 74]}
        />
        <RadialBar dataKey="score" cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className={`${percent < 80 ? "fill-red-500" : "fill-green-500"} text-4xl font-bold`}
                    >
                      {percent.toLocaleString()}%
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-white/70"
                    >
                      Your score
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
