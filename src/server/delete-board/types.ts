import type { z } from "zod";
import type { Board } from "../db/schema";

import type { ActionState } from "~/lib/create-safe-action";
import type { DeleteBoard } from "~/server/delete-board/schema";

export type InputType = z.infer<typeof DeleteBoard>;
export type ReturnType = ActionState<InputType, Board>;