"use client";

import type { ListWithCards } from "types";
import { ListForm } from "./list-form";
import { useEffect, useState } from "react";
import { ListItem } from "./list-item";

interface ListContainerProps {
    boardId: string;
    data: ListWithCards[];
}

export const ListContainer = ({ boardId, data }: ListContainerProps) => {

    const [orderData, setOrderedData] = useState(data);

    useEffect(() => {
        setOrderedData(data)
    }, [data]);

    return ( 
        <ol className="flex gap-x-3 h-full">
            {orderData.map((list, index) => (
                <ListItem key={list.id} index={index} data={list} />
            ))}
            <ListForm />
            <div className="flex-shrink-0 w-1"/>
        </ol>
    )
}