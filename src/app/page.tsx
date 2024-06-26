import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages, getMyTasks } from "~/server/queries";
import LandingPage from "~/components/pages/LandingPage";
import Link from "next/link";
import DashboardPage from "~/components/pages/DashboardPage";

export const dynamic = "force-dynamic";

async function Tasks() {
  const tasks = await getMyTasks();
  const images = await getMyImages();

  function TaskCard({ task }: { task: { id: number; name: string } }) {
    return (
      <div className="flex rounded-md bg-slate-700 p-2">
        <h1>{task.name}</h1>
        <h2>{task.id}</h2>
      </div>
    );
  }

  function ColumnContainer({ title }: { title: string }) {
    return (
      <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-bold">{title}</h1>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    );
  }

  function KanbanContainer() {
    return (
      <div className="flex flex-row justify-center space-x-4">
        <ColumnContainer title="Not Started" />
        <ColumnContainer title="In Progress" />
        <ColumnContainer title="Completed" />
      </div>
    );
  }

  return (
    <>
      {/* <div className="flex flex-wrap justify-center space-x-4">
        {tasks.map((task) => (
          <div key={task.id} className="mb-4 rounded border p-4 ">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-bold"> {task.name} </h2>
              <Link href={`/task/${task.id}`}>
                <Button variant="outline" className="text-sm ">
                  <p> Edit </p>
                </Button>
              </Link>
            </div>

            <div className="mb-4">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between space-x-2 text-gray-600">
                  <p>Subitem1</p>
                  <button className="text-red-500 hover:text-red-700">
                    <p> X </p>
                  </button>
                </div>
                <div className="flex justify-between space-x-2 text-gray-600">
                  <p>Subitem2</p>
                  <button className="text-red-500 hover:text-red-700">
                    <p> X </p>
                  </button>
                </div>
                <div className="flex justify-between space-x-2 text-gray-600">
                  <p>Subitem3</p>
                  <button className="text-red-500 hover:text-red-700">
                    <p> X </p>
                  </button>
                </div>
                <button className="rounded bg-blue-500 px-2 text-white hover:bg-blue-700 ">
                  + Add Subitem
                </button>
              </div>
              <hr className="my-2"></hr>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between space-x-2 text-gray-600">
                  <p>Link 1</p>
                  <button className="text-red-500 hover:text-red-700">
                    <p> X </p>
                  </button>
                </div>
                <button className="rounded bg-blue-500 px-2 text-black hover:bg-blue-700 ">
                  + Add Link
                </button>
              </div>
            </div>
            {task.taskImageUrl ? (
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Image
                    className="mb-4 w-16 w-full rounded-lg object-contain"
                    src={task.taskImageUrl}
                    style={{ objectFit: "contain" }}
                    alt={`Item ${task.id}`}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <Image
                    className="mb-4 w-16 w-full rounded-lg object-contain"
                    src={task.taskImageUrl}
                    style={{ objectFit: "contain" }}
                    alt={`Item ${task.id}`}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <Image
                    className="mb-4 w-16 w-full rounded-lg object-contain"
                    src={task.taskImageUrl}
                    style={{ objectFit: "contain" }}
                    alt={`Item ${task.id}`}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <Image
                    className="mb-4 w-16 w-full rounded-lg object-contain"
                    src={task.taskImageUrl}
                    style={{ objectFit: "contain" }}
                    alt={`Item ${task.id}`}
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            ) : null}
            <div className="flex flex-col py-2">
              <div className="text-gray-500">
                Start date: {task.startDate.toDateString()}
              </div>
              <div className="text-gray-500">
                End date: {task.endDate.toDateString()}
              </div>
            </div>
            <div className="flex flex-col space-y-2 py-2">
              <div className="text-gray-500">Status: {task.taskStatus}</div>
              <div className="text-gray-500">Tags: {task.tags}</div>
            </div>
          </div>
        ))}
      </div> */}
      {/* <div className="flex flex-wrap justify-center space-x-4">
        {images.map((image) => (
          <div key={image.id} className="flex h-48 w-48 flex-col ">
            <Image
              src={image.url}
              alt={`Item ${image.id}`}
              className="mb-4 w-full rounded-lg w-48 object-contain"
              width={50}
              height={50}
            />
          </div>
        ))}
      </div> */}

      <KanbanContainer />
    </>
  );
}

export default async function RootPage() {
  return (
    <>
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <DashboardPage />
      </SignedIn>
    </>
  );
}
