import { PropsWithChildren } from "react";

export default function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex w-fit font-mono text-sm text-primary font-bold px-2.5 py-1.5 rounded-full border border-border">
      {children}
    </span>
  );
}
