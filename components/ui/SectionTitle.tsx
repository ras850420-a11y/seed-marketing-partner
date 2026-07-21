import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({
  title,
  eyebrow,
  description,
  align = "left",
  light = false
}: SectionTitleProps) {
  return (
    <div className={cn("mb-9 max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-bold text-teal",
            light && "text-white/80"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("text-2xl font-bold leading-tight sm:text-3xl", light && "text-white")}>
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-8 text-muted",
            light && "text-white/80"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
