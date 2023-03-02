import {
  updatePropsSnippet,
  updatingMembershipCard,
} from "~/challengeComponents/remix/updatingDataSnippets/updatingMembershipCardSnippet";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import InlineMonoType from "~/components/InlineMonoType";
import ListItem from "~/components/ListItem";
import NextLessonLink from "~/components/NextLessonLink";
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
            2, 3, 4, 11, 12, 13, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            44,
          ]}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <InfoBlock title="What is happening?">
          <Paragraph challengeBlock>
            Essentially, we are switch the old{" "}
            <InlineMonoType challengeBlock>{"<li>"}</InlineMonoType> for a{" "}
            <InlineMonoType challengeBlock>{"<label>"}</InlineMonoType>{" "}
            component that wraps two form{" "}
            <InlineMonoType challengeBlock>input</InlineMonoType>s along with
            the original content.
          </Paragraph>
          <Paragraph challengeBlock>
            The first{" "}
            <InlineMonoType challengeBlock>{"<input />"}</InlineMonoType> is
            hidden - we won't see this in the browser, but it will contain the
            user's id that is needed when we update their membership in the
            database.
          </Paragraph>
          <Paragraph challengeBlock>
            The second{" "}
            <InlineMonoType challengeBlock>{"<input />"}</InlineMonoType> is set
            to <InlineMonoType challengeBlock>type="radio"</InlineMonoType>,
            which means only one button can be selected at a time.
          </Paragraph>
          <Paragraph challengeBlock>
            Let's take a look at each of the other properties used in this
            second <InlineMonoType challengeBlock>{"<input />"}</InlineMonoType>{" "}
            element:
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

            <ListItem challengeBlock>
              <InlineMonoType challengeBlock>value</InlineMonoType> — Each radio
              button has its own{" "}
              <InlineMonoType challengeBlock>value</InlineMonoType>. This
              property will be sent with the form when the option is selected.
              This is the definition / meaning for each radio button.
            </ListItem>

            <ListItem challengeBlock>
              <InlineMonoType challengeBlock>id</InlineMonoType> — this is
              needed so that the{" "}
              <InlineMonoType challengeBlock>{"<label>"}</InlineMonoType> can be
              associated with the right input, so that clicking the label
              focuses the input.
            </ListItem>

            <ListItem challengeBlock>
              <InlineMonoType challengeBlock>defaultChecked</InlineMonoType>{" "}
              This is a <InlineMonoType challengeBlock>boolean</InlineMonoType>{" "}
              value that decides if this particular radio button should be
              selected when the component first renders. Can you work out what
              it is checking for here?
            </ListItem>
          </ul>
        </InfoBlock>
      </div>

      <Paragraph darkMode>
        Finally, let's pass the new props required by the updated{" "}
        <InlineMonoType darkMode>MembershipCard</InlineMonoType> component where
        we are calling it in{" "}
        <InlineMonoType darkMode>app/routes/memberships.tsx</InlineMonoType>:
      </Paragraph>

      <div className="mx-auto mb-6 max-w-5xl px-6">
        <CodeBlock
          snippet={updatePropsSnippet}
          filePath="app/routes/memberships.tsx"
          showLineNumbers
          hideCopyButton
          highlightAdditionalLines={[12, 14, 15, 16, 17]}
        />
      </div>

      <Paragraph darkMode>
        Nearly there! In the next lesson, we will add the code that will update
        the database when a user changes their selection.
      </Paragraph>

      <NextLessonLink to="/remix/updating-data/action-functions">
        Next: Action functions
      </NextLessonLink>
    </>
  );
};

export default UpdatingComponents;
