import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Label } from "./label";

interface PageHeaderProps {
  day?: number;
  tag?: string;
  title: string;
  description?: string;
}

export function PageHeader({ day, tag, title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      {(day != null || tag) && (
        <div className="mb-3 ">
          {day != null && (
            <Badge
              variant="outline"
              className="text-xs border-none font-bold bg-primary-blue-100 text-white tracking-widest uppercase"
            >
              Day {day}
            </Badge>
          )}
          {tag && !day && (
            <Badge
              variant="secondary"
              className="text-xs bg-primary-blue-100 text-white font-bold tracking-widest uppercase"
            >
              {tag}
            </Badge>
          )}
        </div>
      )}
      <Label className="text-3xl font-bold tracking-tight">{title}</Label>
      {description && (
        <Label className="font-normal mt-3 text-lg leading-relaxed">
          {description}
        </Label>
      )}
      <Separator className="mt-6 bg-white/30" />
    </div>
  );
}
