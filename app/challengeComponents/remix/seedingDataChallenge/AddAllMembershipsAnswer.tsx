import { ArrowRightCircle } from "react-feather";
import { addAllMembershipsSnippet } from "~/assets/codeSnippets/addingAModel/seedingDataSnippets";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InternalStyledLink from "~/components/InternalStyledLink";
import Paragraph from "~/components/Paragraph";

const AddAllMembershipsAnswer = () => {
  return (
    <>
      <Heading level="h2">Add All Memberships Solution</Heading>
      <Paragraph darkMode>
        The solution to this challenge might look something like this:
      </Paragraph>
      <div className="my-6">
        <CodeBlock
          showLineNumbers
          filePath="prisma/seed.ts"
          snippet={addAllMembershipsSnippet}
        />
      </div>
      <Paragraph darkMode>
        Fantastic! 😅 Next, let's seed some users associated with memberships.
      </Paragraph>

      <div className="mt-12 mb-6">
        <InternalStyledLink
          to="/remix/prisma/adding-a-prisma-model/associate-users-with-memberships"
          className="group flex items-center justify-end text-2xl"
          darkMode
        >
          Next: Associate users with memberships{" "}
          <ArrowRightCircle className="ml-4 group-hover:stroke-blue-400" />
        </InternalStyledLink>
      </div>
    </>
  );
};

export default AddAllMembershipsAnswer;
