"use client";

import React, { useState, useRef, useLayoutEffect } from "react";

interface TabItem {
  label: string;
  value: string;
}

interface SlidingTabsProps {
  tabs: TabItem[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
}

export default function SlidingTabs({
  tabs,
  defaultValue,
  onChange,
  children,
}: SlidingTabsProps) {
  const [active, setActive] = useState(defaultValue ?? tabs[0]?.value);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const handleClick = (value: string) => {
    setActive(value);
    onChange?.(value);
  };

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeEl = tabRefs.current.get(active);
    if (!activeEl) return;

    const containerRect = container.getBoundingClientRect();
    const rect = activeEl.getBoundingClientRect();

    setIndicatorStyle({
      transform: `translateX(${rect.left - containerRect.left}px)`,
      width: rect.width,
    });
  }, [active]);

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div ref={containerRef} className="relative flex w-full">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            ref={(el) => {
              if (el) tabRefs.current.set(tab.value, el);
            }}
            onClick={() => handleClick(tab.value)}
            className={`relative z-10 flex-1 py-2 text-sm font-medium transition-colors duration-300
              ${active === tab.value ? "text-white" : "text-muted-foreground"}
            `}
          >
            {tab.label}
          </button>
        ))}

        <div
          className="absolute top-0 left-0 h-full rounded-md pointer-events-none transition-all duration-300 ease-out bg-linear-90 from-primary-blue-100 to-purple-400"
          style={{
            ...indicatorStyle,
            zIndex: 0,
          }}
        />
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {React.Children.map(children, (child: any) => {
          if (!child) return null;

          if (child.props?.["data-tab"] === active) {
            return child;
          }

          return null;
        })}
      </div>
    </div>
  );
}
