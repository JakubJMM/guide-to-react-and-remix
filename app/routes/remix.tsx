import { Link, Outlet } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ArrowRightCircle } from "react-feather";
import { FaLaptopCode } from "react-icons/fa";
import SidebarLink from "~/components/SidebarLink";

const Remix = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="group absolute top-4 left-4 z-20 flex h-20 w-20 items-center justify-center bg-neutral-900 lg:hidden"
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
          <div
            className={`fixed inset-0 z-10 h-full w-full transition-all duration-300 ${
              isOpen
                ? "left-0 bg-neutral-900 bg-opacity-90"
                : "-left-full bg-transparent"
            }`}
          >
            <aside
              className={`absolute top-0 bottom-0 z-20 w-64 overflow-scroll border-r border-neutral-700 bg-neutral-900 p-6 transition-all ${
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
                  <SidebarLink to="routing-in-remix/adding-a-new-page/add-a-route-file">
                    Adding a new page
                  </SidebarLink>
                  <SidebarLink to="adding-npm-packages/react-feather">
                    NPM Packages
                  </SidebarLink>
                  <SidebarLink to="authentication/require-user-id">
                    Protecting Routes with Authentication
                  </SidebarLink>
                  <SidebarLink to="/remix/prisma/adding-a-prisma-model/creating-a-table">
                    Adding a Prisma model
                  </SidebarLink>
                  <SidebarLink to="loading-data/prisma-getter-functions">
                    Loading Data
                  </SidebarLink>
                  <SidebarLink to="updating-data/forms">
                    Updating Data With Forms
                  </SidebarLink>
                </div>
              </section>
            </aside>
          </div>
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
