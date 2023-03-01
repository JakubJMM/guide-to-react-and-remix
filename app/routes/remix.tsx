import { Link, Outlet } from "@remix-run/react";

const Remix = () => {
  return (
    <div className="flex min-h-screen bg-neutral-900 text-white">
      <aside className="w-1/4 p-12">
        <section>
          <h3 className="mb-4 text-sm font-bold uppercase">Remix Lessons</h3>
          <div>
            <Link
              className="mb-2 text-sm text-neutral-300 hover:text-white"
              to="routing-in-remix/adding-a-new-page/add-a-route-file"
            >
              Adding a new page
            </Link>
          </div>
          <div>
            <Link
              className="mb-2 text-sm text-neutral-300 hover:text-white"
              to="adding-npm-packages/react-feather"
            >
              Adding NPM Packages
            </Link>
          </div>
          <div>
            <Link
              className="mb-2 text-sm text-neutral-300 hover:text-white"
              to="authentication/require-user-id"
            >
              Protecting Routes with Authentication
            </Link>
          </div>
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
              to="loading-data/prisma-getter-functions"
            >
              Loading Data
            </Link>
          </div>
          <div>
            <Link
              className="mb-2 text-sm text-neutral-300 hover:text-white"
              to="updating-data/forms"
            >
              Updating Data With Forms
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
