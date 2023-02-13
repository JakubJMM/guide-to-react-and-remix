import { Outlet } from "@remix-run/react";
import Heading from "~/components/Heading";
import LessonLink from "~/components/LessonLink";

const AddingAModal = () => {
  return (
    <>
      <Heading level="h1" className="text-center">
        Adding a Model
      </Heading>
      <div className="flex flex-wrap justify-around">
        <LessonLink to="creating-a-table" connectTo="view-the-database">
          Create a table
        </LessonLink>
        <LessonLink to="view-the-database" connectTo="seeding-data">
          View the Database
        </LessonLink>
        <LessonLink to="seeding-data" connectTo="seeding-data-challenge">
          Seeding data
        </LessonLink>
        <LessonLink
          to="seeding-data-challenge"
          connectTo="associate-users-with-memberships"
        >
          Seeding: Challenge
        </LessonLink>
        <LessonLink to="associate-users-with-memberships">
          Associate users and memberships
        </LessonLink>
      </div>
      <div>
        <div className="mx-auto max-w-3xl ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AddingAModal;
