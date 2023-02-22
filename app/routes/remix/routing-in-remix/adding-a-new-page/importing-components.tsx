import { useState } from "react";
import callingMembershipComponent from "~/assets/calling-membership-component.png";
import { basicMembershipSnippet } from "~/assets/codeSnippets/addMembershipsRoute/membershipRouteSnippets";
import AddMembershipCardAnswer from "~/challengeComponents/remix/addPageChallenge/AddMembershipCardAnswer";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodePlayground from "~/components/CodePlayground";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";
import RevealAnswerButton from "~/components/RevealAnswerButton";
import Screenshot from "~/components/Screenshot";

interface ImportingComponentsProps {
  children: React.ReactNode;
}

const membershipRouteFile = {
  "/App.tsx": `import Membership from './membership.tsx';

  export default function App(): JSX.Element {
    return <Membership />;
  }
  `,
  "/membership.tsx": { active: true, code: basicMembershipSnippet },
};

const ImportingComponents = ({ children }: ImportingComponentsProps) => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleShowMembershipCardAnswer = () => {
    setIsShowingAnswer(true);
  };

  return (
    <>
      <Heading isCentre level="h2">
        Using Custom Components
      </Heading>
      <Paragraph darkMode>
        React components allow you to bundle repeated code.
      </Paragraph>
      <Paragraph darkMode>
        Look again at the code in the code you imported into your new route file
        at <InlineMonoType darkMode>app/routes/memberships.tsx</InlineMonoType>:
      </Paragraph>

      <ChallengeBlock>
        <Paragraph challengeBlock>
          There is a LOT of repeated code in our new memberships route file. Can
          you see where these blocks of repeated code start and finish?
        </Paragraph>
        <Paragraph challengeBlock>
          Directly below this challenge block is an interactive code editor that
          you can update directly on this page, and your changes will be shown
          immediately in the window next to it.
        </Paragraph>
        <Paragraph challengeBlock>
          Complete the{" "}
          <InlineMonoType challengeBlock>MembershipCard</InlineMonoType>{" "}
          component at the top of the{" "}
          <InlineMonoType challengeBlock>memberships.tsx</InlineMonoType> file
          that allows you to pass in the props of{" "}
          <InlineMonoType challengeBlock>level</InlineMonoType>,{" "}
          <InlineMonoType challengeBlock>description</InlineMonoType> and{" "}
          <InlineMonoType challengeBlock>price</InlineMonoType>
        </Paragraph>
        <Paragraph challengeBlock>
          When finished, you should be able to call the{" "}
          <InlineMonoType challengeBlock>MembershipCard</InlineMonoType>{" "}
          component like so:
        </Paragraph>
        <Screenshot
          src={callingMembershipComponent}
          alt="Calling the Membership component"
          challengeBlock
        />
      </ChallengeBlock>

      <CodePlayground
        id="importing-components-challenge"
        title="Memberships.tsx"
        files={membershipRouteFile}
        showTabs={false}
      />

      {!isShowingAnswer && (
        <RevealAnswerButton onClick={handleShowMembershipCardAnswer} />
      )}

      {isShowingAnswer && <AddMembershipCardAnswer />}
    </>
  );
};

export default ImportingComponents;
