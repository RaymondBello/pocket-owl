import "server-only";

import { db } from "./db";
import { auth } from "@clerk/nextjs/server";


export async function getMyImages() {

    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");
    
    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => desc(model.id),
    });

    return images;
}

export async function getMyTasks() {

    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");

    const tasks = await db.query.tasks.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => desc(model.id),
    });

    return tasks;
}
    