import { updatingMembershipCard } from "~/challengeComponents/remix/updatingDataSnippets/updatingMembershipCardSnippet";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import InlineMonoType from "~/components/InlineMonoType";
import ListItem from "~/components/ListItem";
import Paragraph from "~/components/Paragraph";

const UpdatingComponents = () => {
  return (
    <>
      <Heading level="h2" isCentre>
        Updating <InlineMonoType darkMode>MembershipCard</InlineMonoType>
      </Heading>

      <Paragraph darkMode>
        To make the <InlineMonoType darkMode>MembershipCard</InlineMonoType>{" "}
        work inside a <InlineMonoType darkMode>Form</InlineMonoType>, we need to
        update it's structure a little. Copy and paste the code below to replace
        all your existing{" "}
        <InlineMonoType darkMode>MembershipCard</InlineMonoType> code:
      </Paragraph>

      <div className="mb-6 px-6">
        <CodeBlock
          snippet={updatingMembershipCard}
          showLineNumbers
          filePath="app/components/MembershipCard.tsx"
          highlightAdditionalLines={[
            2, 3, 10, 11, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 41,
          ]}
        />
      </div>

      <div className="max-w-5xl px-6">
        <InfoBlock title="What is happening?">
          <Paragraph challengeBlock>
            Let's take a look at each of the properties used in the{" "}
            <InlineMonoType challengeBlock>input</InlineMonoType> element:
          </Paragraph>
          <ul className="px-6">
            <ListItem challengeBlock>
              <InlineMonoType challengeBlock>name</InlineMonoType>: The browser
              needs to know that each button is part of the same group, so that
              when the user selects one option it can unselect the others. This
              is done through the{" "}
              <InlineMonoType challengeBlock>name</InlineMonoType> prop. Each
              radio button in a group should share the same{" "}
              <InlineMonoType challengeBlock>name</InlineMonoType>.
            </ListItem>
          </ul>
        </InfoBlock>
      </div>
    </>
  );
};

export default UpdatingComponents;
