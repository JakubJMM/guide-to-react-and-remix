import { Outlet } from "@remix-run/react";
import Heading from "~/components/Heading";
import LessonLink from "~/components/LessonLink";

const AddingANewPage = () => {
  return (
    <>
      <Heading level="h1" className="text-center">
        Adding a New Page
      </Heading>
      <div className="flex flex-wrap justify-around lg:px-24">
        <LessonLink to="add-a-route-file" connectTo="importing-components">
          Add a route file
        </LessonLink>
        <LessonLink to="importing-components">Importing Components</LessonLink>
      </div>
      <div>
        <div className="px-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AddingANewPage;
