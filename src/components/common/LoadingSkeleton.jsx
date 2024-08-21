import { cn } from "@/utils/utils";

function LoadingSkeleton({
  className,
  testId, // Adding the testId prop
  ...props
}) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      data-test-id={testId} // Applying the testId prop
      {...props}
    />
  );
}

export { LoadingSkeleton };
