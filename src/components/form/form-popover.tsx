"use client";
import type { ElementRef } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { toast } from "sonner";

import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Button } from "~/components/ui/button";

import { useAction } from "hooks/use-actions";
import { createBoard } from "~/server/actions/create-board";

import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { FormPicker } from "./form-picker";

interface FormPopoverProps {
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
}

export const FormPopover = ({
    children,
    side = "bottom",
    align,
    sideOffset = 0,
}: FormPopoverProps) => { 

    const router = useRouter();
    const closeRef = useRef<ElementRef<"button">>(null);

    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            console.log({ data });
            toast.success("Board created");
            closeRef.current?.click();

            router.push(`/boards/${data.id}`);
            // revalidatePath(`/boards`);
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    const onSubmit = async (formData: FormData) => { 
        const name = formData.get("name") as string;
        const image = formData.get("image") as string;

        await execute({ name, image });
    }

    return (
        <>
        <Popover>
            <PopoverTrigger>
                {children}
            </PopoverTrigger>
            <PopoverContent align={align} className="w-80 pt-3" side={side} sideOffset={sideOffset}>
                <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    Create Board
                </div>
                <PopoverClose ref={closeRef} asChild >
                    <Button className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600" variant={"ghost"}>
                        <X className="h-4 w-4" />
                    </Button>
                </PopoverClose>
                <form action={onSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <FormPicker id="image" errors={fieldErrors}/>
                        <FormInput id="name" label="Board Name" type="text" className="border px-1" errors={fieldErrors} />
                    </div>
                    <FormSubmit className="text-slate-800">Create</FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
        </>
    )
}
    