import { cn } from "@/lib/utils";

export function GreekDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-4 w-32", className)}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
      <span className="text-champagne/80 text-xs">◆</span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
    </div>
  );
}
