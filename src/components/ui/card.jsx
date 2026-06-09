import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-surface border border-line rounded-lg flex flex-col gap-2.5 transition-all duration-150",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex items-center justify-between gap-2.5", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return (
    <div
      className={cn("text-[13px] text-muted leading-[1.55] flex-1", className)}
      {...props}
    />
  );
}

export function CardFooter({ className, ...props }) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)} {...props} />
  );
}
