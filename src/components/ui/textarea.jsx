/* eslint-disable react/prop-types */
import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(
  ({ className, label, name, value, field, handleChange, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label>{label}</label>
        <textarea
          name={name}
          value={value}
          onChange={(e) => handleChange(e, field)}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm resize-none placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
