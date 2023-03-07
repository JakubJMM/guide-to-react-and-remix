import { addUseUserSnippet } from "~/challengeComponents/remix/updatingDataSnippets/addUseUser";
import { wrapMembershipCardsInFormSnippet } from "~/challengeComponents/remix/updatingDataSnippets/wrapMembershipCardsInForm";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import InlineMonoType from "~/components/InlineMonoType";
import InternalStyledLink from "~/components/InternalStyledLink";
import NextLessonLink from "~/components/NextLessonLink";
import Paragraph from "~/components/Paragraph";

const Forms = () => {
  return (
    <>
      <Heading level="h2" isCentre>
        Forms
      </Heading>

      <InfoBlock title="Before starting...">
        <Paragraph challengeBlock>
          Before starting this lesson, you should complete the lesson on loading
          data found{" "}
          <InternalStyledLink
            className="text-[1.5rem]"
            to="/remix/loading-data/loader-functions"
          >
            here
          </InternalStyledLink>
          .
        </Paragraph>
      </InfoBlock>
      <Paragraph darkMode>
        Forms are the primary tool that users have to submit information on the
        internet. Their information is used to update or create records in a
        database.
      </Paragraph>

      <Paragraph darkMode>
        Lets start by getting access to our user's details:
      </Paragraph>

      <div className="mb-6 px-6">
        <CodeBlock
          snippet={addUseUserSnippet}
          showLineNumbers
          filePath="app/routes/memberships.tsx"
          highlightAdditionalLines={[6, 16]}
        />
      </div>

      <Paragraph darkMode>
        If you remember back in the lesson on{" "}
        <InternalStyledLink
          to="/remix/prisma/adding-a-prisma-model/creating-a-table"
          className="text-[1.5rem]"
        >
          adding a Prisma model
        </InternalStyledLink>
        , we associated users with memberships by adding a{" "}
        <InlineMonoType darkMode>membershipId</InlineMonoType>. It is this
        attribute that we will update when a user selects a new membership level
        from the list.
      </Paragraph>
      <Paragraph darkMode>
        Next, let's wrap our{" "}
        <InlineMonoType darkMode>MembershipCard</InlineMonoType> components in a{" "}
        <InlineMonoType darkMode>Form</InlineMonoType>, and add a dummy{" "}
        <InlineMonoType darkMode>handleChange</InlineMonoType> function that we
        will fill out later:
      </Paragraph>

      <div className="mb-6 px-6">
        <CodeBlock
          snippet={wrapMembershipCardsInFormSnippet}
          showLineNumbers
          filePath="app/routes/memberships.tsx"
          highlightAdditionalLines={[2, 10, 11, 12, 19, 30]}
          hideCopyButton
        />
      </div>

      <Paragraph darkMode>
        In the next lesson, we will update our{" "}
        <InlineMonoType darkMode>MembershipCard</InlineMonoType> component to
        accept some extra props.
      </Paragraph>

      <NextLessonLink to="/remix/updating-data/updating-components">
        Next: Updating the MembershipCard component
      </NextLessonLink>
    </>
  );
};

export default Forms;
