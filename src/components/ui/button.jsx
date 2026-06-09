import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 font-medium transition-colors focus-visible:outline-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "border border-line2 bg-transparent text-muted rounded-lg hover:text-fg hover:border-subtle",
        ghost: "text-muted rounded-md hover:text-fg hover:bg-surface",
        icon: "border border-line2 bg-transparent text-muted rounded-lg hover:text-fg hover:border-subtle",
      },
      size: {
        default: "h-[34px] px-3 text-[11px] font-mono",
        icon: "h-[28px] w-[28px]",
        sm: "h-8 px-2.5 text-xs",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export function Button({ className, variant, size, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export function LinkButton({ className, variant, size, ...props }) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
