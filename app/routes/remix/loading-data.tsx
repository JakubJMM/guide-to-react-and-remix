import { Outlet } from "@remix-run/react";
import Heading from "~/components/Heading";
import LessonLink from "~/components/LessonLink";

const LoadingData = () => {
  return (
    <>
      <Heading level="h1" className="text-center">
        Loading Data
      </Heading>
      <div className="flex flex-wrap justify-around">
        <LessonLink to="prisma-getter-functions" connectTo="loader-functions">
          Prisma Getter Functions
        </LessonLink>
        <LessonLink to="loader-functions" connectTo="loader-functions">
          Loader Functions
        </LessonLink>
      </div>
      <div className="px-6">
        <Outlet />
      </div>
    </>
  );
};

export default LoadingData;
