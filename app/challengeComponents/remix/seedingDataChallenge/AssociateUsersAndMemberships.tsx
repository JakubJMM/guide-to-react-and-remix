import { useState } from "react";
import {
  basicMembershipSeed,
  createUserWithBasicMembershipSnippet,
} from "~/assets/codeSnippets/addingAModel/seedingDataSnippets";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";
import RevealAnswerButton from "~/components/RevealAnswerButton";
import AssociateMultipleUsersWithMemberships from "./AssociateMultipleUsersWithMemberships";

const AssociateUsersAndMemberships = () => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleShowAnswer = () => {
    setIsShowingAnswer(true);
  };

  return (
    <>
      <Heading level="h2">Associate Users with a Membership</Heading>

      <Paragraph darkMode>
        If you remember earlier, we created several memberships that we saved as
        variables. This was the{" "}
        <InlineMonoType darkMode>basicMembership</InlineMonoType> seed:
      </Paragraph>

      <div className="my-6">
        <CodeBlock
          showLineNumbers
          filePath="prisma/seed.ts"
          snippet={basicMembershipSeed}
          hideCopyButton
        />
      </div>

      <Paragraph darkMode>
        To seed a user associated with this 'Basic' membership level, update the{" "}
        <InlineMonoType darkMode>prisma.user.create</InlineMonoType> block of
        code as follows:
      </Paragraph>

      <CodeBlock
        showLineNumbers
        filePath="prisma/seed.ts"
        snippet={createUserWithBasicMembershipSnippet}
        highlightAdditionalLines={[9]}
      />

      <ChallengeBlock>
        <Paragraph darkMode className="text-neutral-50">
          Can you write the code to seed another{" "}
          <InlineMonoType darkMode className="bg-neutral-900 bg-opacity-50">
            User
          </InlineMonoType>{" "}
          with the intermediate membership level?
        </Paragraph>
      </ChallengeBlock>

      {!isShowingAnswer ? (
        <RevealAnswerButton onClick={handleShowAnswer} />
      ) : null}

      {isShowingAnswer ? <AssociateMultipleUsersWithMemberships /> : null}
    </>
  );
};

export default AssociateUsersAndMemberships;
