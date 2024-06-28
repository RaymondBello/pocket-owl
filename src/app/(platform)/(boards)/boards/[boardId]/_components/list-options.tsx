"use client";

import type { List } from "~/server/db/schema";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { MoreHorizontal, MoreVertical, X } from "lucide-react";
import { FormSubmit } from "~/components/form/form-submit";

interface ListOptionsProps {
  data: List;
  onAddCard: () => void;
}

export const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-8 w-8 rounded-full p-2" variant={"ghost"}>
          <MoreVertical className="h-5 w-5 text-slate-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 pb-3 pt-3" side="bottom" align="start">
        <div className="pb-4 text-center text-sm font-medium text-neutral-600">
          List Actions
        </div>
        <PopoverClose>
          <Button
            className=" absolute right-2 top-2 h-auto w-auto p-2 text-neutral-600 "
            variant={"ghost"}
          >
            <X className="h-5 w-5 text-slate-500" />
          </Button>
        </PopoverClose>
        <Button
          onClick={onAddCard}
          className="h-auto w-full justify-start rounded-none p-2 px-5 text-sm font-normal"
          variant={"ghost"}
        >
          Add card...
        </Button>
        <form>
          <input hidden name="id" id="id" value={data.id} />
          <input hidden name="boardId" id="boardId" value={data.boardId} />
          <FormSubmit
            variant="ghost"
            className="h-auto w-full justify-start rounded-none p-2 px-5 text-sm font-normal"
          >
            Copy list...
          </FormSubmit>
        </form>
        <hr className="mt-2 py-1"/>
        <form>
          <input hidden name="id" id="id" value={data.id} />
          <input hidden name="boardId" id="boardId" value={data.boardId} />
          <FormSubmit
            variant="ghost"
            className="h-auto w-full justify-start rounded-none p-2 px-5 text-sm font-normal text-rose-500"
          >
            Delete this list...
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};