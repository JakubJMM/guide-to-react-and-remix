import { createIntermediateUserMemberSnippet } from "~/assets/codeSnippets/addingAModel/seedingDataSnippets";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";

const AssociateMultipleUsersWithMemberships = () => {
  return (
    <>
      <Heading level="h2">Create an intermediate membership user</Heading>

      <Paragraph darkMode>
        To create an intermediate level membership user, we will need to call on
        the
        <InlineMonoType darkMode>intermediateMembership</InlineMonoType> seed
        that was created earlier.
      </Paragraph>

      <Paragraph darkMode>
        Add this code block directly beneath the basic user created in the last
        step:
      </Paragraph>

      <div className="my-6">
        <CodeBlock
          showLineNumbers
          filePath="prisma/seed.ts"
          snippet={createIntermediateUserMemberSnippet}
        />
      </div>

      <Paragraph darkMode>
        Remember to save your file, then run{" "}
        <InlineMonoType darkMode>npx prisma db seed</InlineMonoType> to update
        your database with the seed changes.
      </Paragraph>

      <Paragraph darkMode>
        And we are finished! Well done on creating a brand new{" "}
        <InlineMonoType darkMode>Membership</InlineMonoType> model, and seeding
        some data that links users and memberships together.
      </Paragraph>

      <Paragraph darkMode>
        Next we will learn how to show the membership level of a user on the
        page.
      </Paragraph>
    </>
  );
};

export default AssociateMultipleUsersWithMemberships;
