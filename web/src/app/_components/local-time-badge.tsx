"use client";

import { Badge } from "@/app/_components/badge";
import { useEffect, useState } from "react";

type Props = {
  city: string;
  state: string;
  timezone: string;
};

function formatTimeInTimezone(timezone: string, date: Date): string {
  const formatted = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
  return formatted.replace(/\s+(AM|PM)$/i, "$1");
}

export function LocalTimeBadge({ city, state, timezone }: Props) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const tick = () => setNow(new Date());
    const id = window.setInterval(tick, 5000);
    return () => window.clearInterval(id);
  }, [timezone]);

  return (
    <div role="status" aria-live="polite">
      <Badge>
        {`${city}, ${state} ${formatTimeInTimezone(timezone, now)}`}
      </Badge>
    </div>
  );
}
