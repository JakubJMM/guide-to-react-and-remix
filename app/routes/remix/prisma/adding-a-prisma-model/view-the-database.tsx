import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import InternalStyledLink from "~/components/InternalStyledLink";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";
import allModelsScreen from "~/assets/prisma-studio-all-models.png";
import tableViewScreen from "~/assets/prisma-studio-table-view.png";

const ViewTheDatabase = () => {
  return (
    <>
      <Heading level="h2">View the Database</Heading>
      <Paragraph darkMode>
        You can see any changes made to your database by running the following
        terminal command:
      </Paragraph>
      <div className="my-6">
        <CodeBlock language="shell" snippet="npx prisma studio" />
      </div>
      <Paragraph darkMode>
        This will open the screen below in your browser showing all the tables -
        or models - in your database:
      </Paragraph>
      <div className="my-6">
        <Screenshot
          src={allModelsScreen}
          alt="Prisma Studio all models screen"
        />
      </div>
      <Paragraph darkMode>
        Click on one of the model names and you will be taken to the view for
        that particular database table/model. In the example below, we can see
        the fields of the <InlineMonoType darkMode>Membership</InlineMonoType>{" "}
        model displayed horizontally, but there are no records added yet.
      </Paragraph>
      <div className="my-6">
        <Screenshot src={tableViewScreen} alt="Prisma Studio table view" />
      </div>
      <Paragraph darkMode>
        Let's fix this in the{" "}
        <InternalStyledLink
          to="/remix/prisma/adding-a-prisma-model/seeding-data"
          className="text-[1.5rem]"
        >
          next step
        </InternalStyledLink>{" "}
        by adding some seed data.
      </Paragraph>
    </>
  );
};

export default ViewTheDatabase;
