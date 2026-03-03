import { cn } from "@/lib/utils";
import {
  IconAlertTriangle,
  IconBulb,
  IconInfoCircle,
  IconXboxB,
  IconXboxX,
} from "@tabler/icons-react";
import { Label } from "./label";

type CalloutType = "warning" | "danger" | "info" | "tip";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const config: Record<
  CalloutType,
  {
    icon: React.ReactNode;
    border: string;
    bg: string;
    iconColor: string;
    defaultTitle: string;
  }
> = {
  warning: {
    icon: <IconAlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />,
    border: "border-yellow-500",
    bg: "bg-yellow-400/10 dark:bg-yellow-950/30",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    defaultTitle: "Warning",
  },
  danger: {
    icon: <IconXboxX className="h-4 w-4 shrink-0 mt-0.5" />,
    border: "border-red-500",
    bg: "bg-red-600/20 dark:bg-red-950/30",
    iconColor: "text-red-600 dark:text-red-400",
    defaultTitle: "Important",
  },
  info: {
    icon: <IconInfoCircle className="h-4 w-4 shrink-0 mt-0.5" />,
    border: "border-blue-500",
    bg: "bg-blue-800/30 dark:bg-blue-950/30",
    iconColor: "text-blue-400 dark:text-blue-400",
    defaultTitle: "Note",
  },
  tip: {
    icon: <IconBulb className="h-4 w-4 shrink-0 mt-0.5" />,
    border: "border-emerald-500",
    bg: "bg-emerald-950/70",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    defaultTitle: "Key Principle",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const { icon, border, bg, iconColor, defaultTitle } = config[type];
  const label = title ?? defaultTitle;

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border-l-4 px-4 py-3",
        border,
        bg,
      )}
    >
      <span className={cn(iconColor)}>{icon}</span>
      <div className="flex-1 text-sm leading-relaxed">
        <Label className={cn("mb-1 font-semibold", iconColor)}>{label}</Label>
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
}
