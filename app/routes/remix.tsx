import { LoaderArgs } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { requireUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return null;
};

const Remix = () => {
  return (
    <div className="flex min-h-screen bg-neutral-900 text-white">
      <aside className="w-1/4 p-6">
        <section>
          <h3 className="mb-4 text-sm font-bold uppercase">Prisma (Data)</h3>
          <div>
            <Link
              className="mb-2 text-sm text-neutral-300 hover:text-white"
              to="prisma/adding-a-prisma-model"
            >
              Adding a Prisma model
            </Link>
          </div>
          <div>
            <Link
              className="mb-2 text-sm text-neutral-300 hover:text-white"
              to="routing-in-remix/adding-a-new-page"
            >
              Adding a new page
            </Link>
          </div>
        </section>
      </aside>
      <main className="h-full w-3/4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Remix;
