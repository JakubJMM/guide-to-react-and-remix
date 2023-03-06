import { Link, Outlet } from "@remix-run/react";
import { useState } from "react";
import { ArrowRightCircle } from "react-feather";
import { FaLaptopCode } from "react-icons/fa";

const Remix = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        type="button"
        className="group absolute top-4 left-4 z-20 flex h-20 w-20 items-center justify-center lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ArrowRightCircle
          className={`stroke-white transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          } group-hover:stroke-sky-300`}
          size="2rem"
        />
      </button>
      <div className="min-h-screen bg-neutral-900 text-white shadow-xl lg:relative lg:grid lg:grid-cols-12 lg:gap-4">
        <div className="absolute top-0 bottom-0 lg:relative lg:col-span-4">
          <aside
            className={`absolute top-0 bottom-0 z-10 w-64 overflow-scroll bg-neutral-900 p-6 transition-all ${
              isOpen ? "left-0" : "-left-64"
            } lg:fixed lg:left-0 lg:block lg:w-1/4 lg:p-6`}
          >
            <section>
              <Link className="group hidden lg:block" to="/">
                <FaLaptopCode
                  size="4rem"
                  className="mb-2 fill-neutral-100 group-hover:fill-white"
                />
                <h3 className="mb-8 text-sm font-bold uppercase text-neutral-100 group-hover:text-white">
                  Remix Lessons
                </h3>
              </Link>
              <div className="absolute top-28 lg:relative lg:top-0">
                <h3 className="mb-8 block text-sm font-bold uppercase text-neutral-100 group-hover:text-white lg:hidden">
                  Remix Lessons
                </h3>
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
              </div>
            </section>
          </aside>
        </div>
        <main className={`h-full p-6 lg:col-span-8`}>
          <div className="rounded-lg border border-neutral-700 bg-neutral-900">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Remix;
