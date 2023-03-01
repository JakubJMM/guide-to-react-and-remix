import { Outlet } from "@remix-run/react";
import Heading from "~/components/Heading";
import LessonLink from "~/components/LessonLink";

const UpdatingData = () => {
  return (
    <>
      <Heading level="h1" className="text-center">
        Updating Data
      </Heading>
      <div className="flex flex-wrap justify-around">
        <LessonLink to="forms" connectTo="updating-components">
          Forms
        </LessonLink>
        <LessonLink to="updating-components" connectTo="action-functions">
          Updating components
        </LessonLink>
        <LessonLink to="action-functions">Action Functions</LessonLink>
      </div>
      <div className="px-6">
        <Outlet />
      </div>
    </>
  );
};

export default UpdatingData;
