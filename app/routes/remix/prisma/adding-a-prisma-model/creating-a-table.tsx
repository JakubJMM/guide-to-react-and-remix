import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {
  newMemberShipSnippet,
  updatedUserModelSnippet,
} from "~/assets/codeSnippets/addingAModel/prismaSchemaSnippets";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import InternalStyledLink from "~/components/InternalStyledLink";
import Paragraph from "~/components/Paragraph";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);

  return json({ userId });
}

export default function CreatingATable() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();

  console.log({ user });

  return (
    <div>
      <Heading level="h2" className={`mt-12 text-left text-2xl font-bold`}>
        Creating a table
      </Heading>
      <Paragraph darkMode>
        To add a new table called{" "}
        <InlineMonoType darkMode>Membership</InlineMonoType>, add the code below
        to the end of{" "}
        <InlineMonoType darkMode>prisma/schema.prisma</InlineMonoType>:
      </Paragraph>

      <div className="my-6">
        <CodeBlock
          filePath="prisma/schema.prisma"
          language="prisma"
          showLineNumbers={true}
          snippet={newMemberShipSnippet}
        />
      </div>

      <Paragraph darkMode>
        We will also need to update the{" "}
        <InlineMonoType darkMode>User</InlineMonoType> model towards the top of
        the file on line 10. Replace your existing{" "}
        <InlineMonoType darkMode>User</InlineMonoType> model code with that
        shown below:
      </Paragraph>

      <div className="my-6">
        <CodeBlock
          filePath="prisma/schema.prisma"
          language="prisma"
          showLineNumbers={true}
          snippet={updatedUserModelSnippet}
          highlightAdditionalLines={[10, 11]}
        />
      </div>

      <Paragraph darkMode>
        This defines a two-way relationship: a{" "}
        <InlineMonoType darkMode>User</InlineMonoType> can optionally have one{" "}
        <InlineMonoType darkMode>Membership</InlineMonoType>, and a{" "}
        <InlineMonoType darkMode>Membership</InlineMonoType> can be associated
        with many <InlineMonoType darkMode>Users</InlineMonoType>.
      </Paragraph>
      <Paragraph darkMode>
        Once pasted into your schema file, run the following command in your
        terminal push your changes to the database:
      </Paragraph>

      <div className="my-6">
        <CodeBlock language="shell" snippet="npx prisma db push" />
      </div>

      <div className="mt-12 mb-6">
        <InternalStyledLink
          to="/remix/prisma/adding-a-prisma-model/view-the-database"
          className="group flex items-center justify-end text-2xl"
          darkMode
        >
          Next: View the database{" "}
          <FaArrowAltCircleRight className="ml-4 fill-blue-500 group-hover:fill-blue-400" />
        </InternalStyledLink>
      </div>
    </div>
  );
}
