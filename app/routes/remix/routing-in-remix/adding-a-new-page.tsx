import { Outlet } from "@remix-run/react";
import Heading from "~/components/Heading";
import LessonLink from "~/components/LessonLink";

interface AddingANewPageProps {
  children: React.ReactNode;
}

const AddingANewPage = ({ children }: AddingANewPageProps) => {
  return (
    <>
      <Heading level="h1" className="text-center">
        Adding a New Page
      </Heading>
      <div className="flex flex-wrap justify-around">
        <LessonLink to="add-a-route-file" connectTo="importing-components">
          Add a route file
        </LessonLink>
        <LessonLink to="importing-components" connectTo="nested-routes">
          Importing Components
        </LessonLink>
        <LessonLink to="nested-routes">Nested routes</LessonLink>
      </div>
      <div>
        <div className="mx-auto max-w-3xl ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AddingANewPage;
