import { basicMembershipSnippet } from "~/assets/codeSnippets/addMembershipsRoute/membershipRouteSnippets";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodePlayground from "~/components/CodePlayground";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";
import callingMembershipComponent from "~/assets/calling-membership-component.png";

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
          There is a LOT of repeated code below. Can you see where these blocks
          of repeated code start and finish?
        </Paragraph>
        <Paragraph challengeBlock>
          Complete the{" "}
          <InlineMonoType challengeBlock>MembershipCard</InlineMonoType>{" "}
          component at the top of the{" "}
          <InlineMonoType challengeBlock>memberships.tsx</InlineMonoType> file
          below that allows you to pass in the props of{" "}
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
        title="Memberships.tsx"
        files={membershipRouteFile}
        showTabs={false}
      />
    </>
  );
};

export default ImportingComponents;
