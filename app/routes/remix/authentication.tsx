import { Outlet } from "@remix-run/react";
import Heading from "~/components/Heading";
import LessonLink from "~/components/LessonLink";

const Authentication = () => {
  return (
    <>
      <Heading level="h1" className="text-center">
        Authentication
      </Heading>
      <div className="flex flex-wrap justify-around">
        <LessonLink to="require-user-id" connectTo="use-optional-user">
          Require User Id
        </LessonLink>
        <LessonLink to="use-optional-user" connectTo="conditional-rendering">
          Use Optional User
        </LessonLink>
        <LessonLink to="conditional-rendering">
          Conditional Rendering
        </LessonLink>
      </div>
      <div className="px-6">
        <Outlet />
      </div>
    </>
  );
};

export default Authentication;
