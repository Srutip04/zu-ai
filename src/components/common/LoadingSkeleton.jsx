import { cn } from "@/utils/utils"

function LoadingSkeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />);
}

export { LoadingSkeleton }
