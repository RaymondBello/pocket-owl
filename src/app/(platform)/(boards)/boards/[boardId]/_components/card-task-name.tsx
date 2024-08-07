"use client";

import { Circle, CircleCheckBig } from "lucide-react";
import { useState } from "react";

export function CardTaskName({
  taskId,
  taskName,
}: {
  taskId: number;
  taskName: string;
}) {
  const [taskCompleted, setTaskCompleted] = useState(false);

  return (
    <div className=" text-sm font-semibold flex flex-row items-center space-x-2 pb-2 pt-1 text-slate-600">
      <button onClick={() => setTaskCompleted(!taskCompleted)}>
        {taskCompleted ? (
          <CircleCheckBig className="h-4 w-4 stroke-slate-800" />
        ) : (
          <Circle className="h-4 w-4 stroke-slate-800" />
        )}
      </button>
      <span>
        {taskName}
      </span>
    </div>
  );
}
