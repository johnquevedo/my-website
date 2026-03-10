import { cn } from "@/lib/utils";

interface TagChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function TagChip({ label, active, onClick }: TagChipProps) {
  const classes = cn(
    "rounded-full border px-3 py-1.5 text-xs font-medium transition",
    active
      ? "border-accent bg-accent text-accent-contrast"
      : "border-border bg-card text-fg hover:border-accent"
  );

  if (onClick) {
    return (
      <button className={classes} type="button" onClick={onClick}>
        {label}
      </button>
    );
  }

  return <span className={classes}>{label}</span>;
}
