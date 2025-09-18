import * as React from "react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "animate-spin rounded-full border-2 border-muted-foreground border-t-foreground",
          className
        )}
        {...props}
      />
    );
  }
);
LoadingSpinner.displayName = "LoadingSpinner";

export { LoadingSpinner };