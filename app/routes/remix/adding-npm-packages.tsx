import { Outlet } from "@remix-run/react";
import Heading from "~/components/Heading";
import LessonLink from "~/components/LessonLink";

const AddingNpmPackages = () => {
  return (
    <>
      <Heading level="h1" className="text-center">
        Adding NPM Packages
      </Heading>
      <div className="flex flex-wrap justify-around">
        <LessonLink to="react-feather" connectTo="react-share">
          Icon sets: React Feather
        </LessonLink>
        <LessonLink to="react-share">Social Networks: React Share</LessonLink>
      </div>
      <div className="px-6">
        <Outlet />
      </div>
    </>
  );
};

export default AddingNpmPackages;
