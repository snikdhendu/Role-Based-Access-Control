import React from "react";
import { cn } from "@/lib/utils";
import GridPattern from "../ui/grid-pattern";

// Allow children as a prop
interface GridPatternLinearGradientProps {
  children?: React.ReactNode;
}

export function GridPatternLinearGradient({ children }: GridPatternLinearGradientProps) {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg  bg-gradient-to-b from-gray-100 to-white  p-20 ">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
