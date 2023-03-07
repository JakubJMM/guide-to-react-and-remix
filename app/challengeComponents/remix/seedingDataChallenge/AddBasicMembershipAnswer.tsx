import { useState } from "react";
import newMemberShipRecord from "~/assets/basicMembershipRecord.png";
import { basicMembershipSeedSnippet } from "~/assets/codeSnippets/addingAModel/seedingDataSnippets";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import ListItem from "~/components/ListItem";
import Paragraph from "~/components/Paragraph";
import RevealAnswerButton from "~/components/RevealAnswerButton";
import Screenshot from "~/components/Screenshot";
import AddAllMembershipsAnswer from "./AddAllMembershipsAnswer";

const AddBasicMembershipAnswer = () => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleShowAllMembershipsAnswer = () => {
    setIsShowingAnswer(true);
  };

  return (
    <>
      <Heading level="h2">Membership seed solution</Heading>
      <Paragraph darkMode>
        Add the code highlighted in green below to the top of the{" "}
        <InlineMonoType darkMode>seed()</InlineMonoType> function in the file at{" "}
        <InlineMonoType darkMode>prisma/seed.ts</InlineMonoType>:
      </Paragraph>

      <div className="my-6">
        <CodeBlock
          snippet={basicMembershipSeedSnippet}
          filePath="prisma/seed.ts"
          showLineNumbers
          hideCopyButton
          highlightAdditionalLines={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        />
      </div>

      <Paragraph darkMode>
        After saving the code above, run the terminal command below:
      </Paragraph>
      <div className="my-6">
        <CodeBlock snippet={`npx prisma db seed`} language="shell" />
      </div>
      <Paragraph darkMode>
        Now if you run <InlineMonoType>npx prisma studio</InlineMonoType>, you
        should see the new membership record in the database:
      </Paragraph>

      <div className="my-6">
        <Screenshot src={newMemberShipRecord} alt="New Membership record" />
      </div>

      <ChallengeBlock>
        <p>
          Now write seeds for the remaining levels of membership at the gym:
        </p>
        <ol className="mx-4 my-6 rounded bg-neutral-900 bg-opacity-50 p-6">
          <ListItem className="ml-8 text-neutral-100" challengeBlock>
            Intermediate: 1 martial art - 3 sessions per week. Monthly fee.
            £35.00
          </ListItem>
          <ListItem className="ml-8 text-neutral-100" challengeBlock>
            Advanced: any 2 martial arts - 5 sessions per week. Monthly fee.
            £45.00
          </ListItem>
          <ListItem className="ml-8 text-neutral-100" challengeBlock>
            Elite: Unlimited classes. Monthly fee. £60.00
          </ListItem>
          <ListItem className="ml-8 text-neutral-100" challengeBlock>
            Junior: Can attend all-kids martial arts sessions. Monthly fee.
            £25.00
          </ListItem>
        </ol>
      </ChallengeBlock>

      {!isShowingAnswer ? (
        <RevealAnswerButton onClick={handleShowAllMembershipsAnswer} />
      ) : null}

      {isShowingAnswer ? <AddAllMembershipsAnswer /> : null}
    </>
  );
};

export default AddBasicMembershipAnswer;
