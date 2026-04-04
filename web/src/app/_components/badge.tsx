import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export function Badge({ children }: Props) {
  return (
    <div
      className="inline-flex items-center justify-center rounded-[1px] border border-white/[0.05] bg-white/[0.04] p-2 text-center font-mono text-white text-xs"
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
