import { useState } from "react";
import { originalCreateUsersAndNotesSnippet } from "~/assets/codeSnippets/addingAModel/seedingDataSnippets";
import AssociateUsersAndMemberships from "~/challengeComponents/remix/seedingDataChallenge/AssociateUsersAndMemberships";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import ListItem from "~/components/ListItem";
import Paragraph from "~/components/Paragraph";
import RevealAnswerButton from "~/components/RevealAnswerButton";

const AssociateUsersWithMemberships = () => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleShowUsersAndMembershipsAnswer = () => {
    setIsShowingAnswer(true);
  };

  return (
    <>
      <Heading level="h2">Associate Users with Memberships</Heading>
      <Paragraph darkMode>
        Finally, we need to associate users with memberships. Remind yourself
        how users and notes are currently being seeded:
      </Paragraph>

      <div className="my-6">
        <CodeBlock
          filePath="prisma/seed.ts"
          showLineNumbers
          snippet={originalCreateUsersAndNotesSnippet}
          highlightInfoLines={[18, 26]}
        />
      </div>

      <Paragraph darkMode>
        Can you see where notes are being associated with a user here via{" "}
        <InlineMonoType darkMode>userId: user.id</InlineMonoType>?
      </Paragraph>
      <Paragraph darkMode>
        This is because a <InlineMonoType darkMode>Note</InlineMonoType> can
        only be associated with one{" "}
        <InlineMonoType darkMode>User</InlineMonoType>, so the{" "}
        <InlineMonoType darkMode>user.id</InlineMonoType> is recorded on the
        <InlineMonoType darkMode>Note</InlineMonoType> record directly.
      </Paragraph>

      <ChallengeBlock>
        <Paragraph challengeBlock className="text-neutral-50">
          Just as a{" "}
          <InlineMonoType
            challengeBlock
            className="bg-neutral-900 bg-opacity-50"
          >
            Note
          </InlineMonoType>{" "}
          can only be associated with one{" "}
          <InlineMonoType
            challengeBlock
            className="bg-neutral-900 bg-opacity-50"
          >
            User
          </InlineMonoType>
          , so a{" "}
          <InlineMonoType
            challengeBlock
            className="bg-neutral-900 bg-opacity-50"
          >
            User
          </InlineMonoType>{" "}
          can only be associated with one{" "}
          <InlineMonoType
            challengeBlock
            className="bg-neutral-900 bg-opacity-50"
          >
            Membership
          </InlineMonoType>
          .
        </Paragraph>
        <Paragraph challengeBlock className="text-neutral-50">
          Can you seed a new{" "}
          <InlineMonoType
            challengeBlock
            className="bg-neutral-900 bg-opacity-50"
          >
            User
          </InlineMonoType>{" "}
          that:
        </Paragraph>

        <ol className="rounded bg-neutral-900 bg-opacity-50 p-6">
          <ListItem challengeBlock className="ml-8 text-neutral-50">
            Uses the same{" "}
            <InlineMonoType
              challengeBlock
              className="bg-neutral-900 bg-opacity-50"
            >
              hashedPassword
            </InlineMonoType>{" "}
            as the currently seeded{" "}
            <InlineMonoType
              challengeBlock
              className="bg-neutral-900 bg-opacity-50"
            >
              user
            </InlineMonoType>
          </ListItem>
          <ListItem challengeBlock className="ml-8 text-neutral-50">
            Is associated with the basic level of{" "}
            <InlineMonoType
              challengeBlock
              className="bg-neutral-900 bg-opacity-50"
            >
              Membership
            </InlineMonoType>
            ?
          </ListItem>
        </ol>
      </ChallengeBlock>

      {!isShowingAnswer ? (
        <RevealAnswerButton onClick={handleShowUsersAndMembershipsAnswer} />
      ) : null}

      {isShowingAnswer ? <AssociateUsersAndMemberships /> : null}
    </>
  );
};

export default AssociateUsersWithMemberships;
