import { conditionalRenderingSolution } from "~/assets/codeSnippets/authentication/useOptionalUserSnippets";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodeBlock from "~/components/CodeBlock";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";

const ConditionalRenderingAnswer = () => {
  return (
    <>
      <Heading isCentre level="h2">
        The solution
      </Heading>
      <Paragraph darkMode>
        To ensure we only see one button at a time, we need to make use of a
        JavaScript ternary statement:
      </Paragraph>

      <div className="mb-6">
        <CodeBlock
          snippet={conditionalRenderingSolution}
          showLineNumbers
          highlightAdditionalLines={[
            8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25,
          ]}
          hideCopyButton
          filePath="app/components/Navbar/index.tsx"
        />
      </div>

      <div className="mx-auto max-w-4xl">
        <InfoBlock title="How does this work?">
          <Paragraph challengeBlock>
            Because of how JavaScript's{" "}
            <ExternalLink
              challengeBlock
              to="https://dev.to/myogeshchavan97/javascript-basics-truthy-and-falsy-values-in-javascript-4jo2"
            >
              truthy and falsy values work
            </ExternalLink>
            , if <InlineMonoType challengeBlock>user</InlineMonoType> is{" "}
            <InlineMonoType challengeBlock>undefined</InlineMonoType>, this will
            simply evaluate to{" "}
            <InlineMonoType challengeBlock>false</InlineMonoType> in the ternary
            statement, and the code in the second set of brackets will be
            executed.
          </Paragraph>
          <Paragraph challengeBlock>
            However, if we <em className="font-italic">do</em> have a{" "}
            <InlineMonoType challengeBlock>user</InlineMonoType> object (i.e.
            the user is signed in), then the ternary statement will evaluate to{" "}
            <InlineMonoType challengeBlock>true</InlineMonoType>, and the code
            in the first set of brackets will be called.
          </Paragraph>
        </InfoBlock>
      </div>

      <Paragraph darkMode>
        And that's how{" "}
        <InlineMonoType darkMode>useOptionalUser()</InlineMonoType> can be used
        to conditionally generate content on a page that everyone has access to.
      </Paragraph>

      <div className="mx-auto max-w-4xl">
        <ChallengeBlock>
          <Paragraph challengeBlock>
            As a final challenge, can you render a greeting to the user
            somewhere in the NavBar when they are logged in? Try to interpolate
            the user's email address into the greeting, e.g.{" "}
            <InlineMonoType challengeBlock>
              'Hi, bob@hotmail.com!'
            </InlineMonoType>
          </Paragraph>
          <Paragraph challengeBlock>
            I'll leave this for you to work out by yourself 😉
          </Paragraph>
        </ChallengeBlock>
      </div>
    </>
  );
};

export default ConditionalRenderingAnswer;
