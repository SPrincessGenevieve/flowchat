"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./label";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
}

function Input({ className, type, label, id, ...props }: InputProps) {
  const inputId = id || React.useId();
  const [showPassword, setShowPassword] = React.useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <Label htmlFor={inputId} className="text-sm text-white select-none">
          {label}
        </Label>
      )}

      <div className="relative w-full">
        <input
          id={inputId}
          type={isPassword && showPassword ? "text" : type}
          data-slot="input"
          className={cn(
            "dark:bg-input/30 border-white/20 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50",
            "h-9 rounded-[5px] border bg-transparent px-2.5 py-1 text-white shadow-xs transition-[color,box-shadow]",
            "file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm",
            "file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none",
            "file:inline-flex file:border-0 file:bg-transparent",
            "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            "pr-10",
            className,
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition"
          >
            {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}

export { Input };
