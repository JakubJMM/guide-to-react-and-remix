import { useState } from "react";
import { newMemberShipSnippet } from "~/assets/codeSnippets/addingAModel/prismaSchemaSnippets";
import AddBasicMembershipAnswer from "~/challengeComponents/remix/seedingDataChallenge/addBasicMembershipAnswer";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import ListItem from "~/components/ListItem";
import Paragraph from "~/components/Paragraph";
import RevealAnswerButton from "~/components/RevealAnswerButton";

const SeedingDataChallenge = () => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleShowMembershipAnswer = () => {
    setIsShowingAnswer(true);
  };

  return (
    <div>
      <Heading level="h2">Seeding Data - Challenge</Heading>
      <Paragraph darkMode>
        Writing seed data is excellent practice for understanding how to build a
        record in the real application.
      </Paragraph>
      <Paragraph darkMode>
        Let's take another look at the{" "}
        <InlineMonoType darkMode>Membership</InlineMonoType> model that we added
        previously:
      </Paragraph>

      <div className="my-6">
        <CodeBlock
          snippet={newMemberShipSnippet}
          filePath="prisma/schema.prisma"
          language="prisma"
        />
      </div>

      <ChallengeBlock>
        <Paragraph className="text-neutral-100" darkMode>
          Looking at the other seed data in{" "}
          <InlineMonoType className="bg-neutral-900 bg-opacity-50" darkMode>
            prisma/schema.prisma
          </InlineMonoType>
          , have a go at writing your own seed that will create a 'Basic' level
          of membership:
        </Paragraph>
        <ol className="mx-4 my-6 rounded bg-neutral-900 bg-opacity-50 p-6">
          <ListItem className="ml-8" challengeBlock>
            Basic: 1 martial art - 2 sessions per week. Monthly fee. £25.00
          </ListItem>
        </ol>
        <Paragraph className="text-neutral-100" darkMode>
          When you are ready, compare your solution with the one below...
        </Paragraph>
      </ChallengeBlock>

      {!isShowingAnswer ? (
        <RevealAnswerButton onClick={handleShowMembershipAnswer} />
      ) : null}

      {isShowingAnswer ? <AddBasicMembershipAnswer /> : null}
    </div>
  );
};

export default SeedingDataChallenge;
