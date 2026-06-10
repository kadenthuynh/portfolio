import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded px-2 py-0.5 text-[11.5px] font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-surface2 border border-line text-muted",
        gold: "bg-accent-soft text-accent",
        blue: "bg-[var(--badge-blue-bg)] text-[var(--badge-blue-text)]",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
