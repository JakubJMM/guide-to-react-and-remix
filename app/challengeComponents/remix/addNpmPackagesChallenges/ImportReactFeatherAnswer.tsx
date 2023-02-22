import { importReactFeatherAnswerSnippet } from "~/assets/codeSnippets/installingNpmPackages/importReactFeatherChallenge";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import Paragraph from "~/components/Paragraph";

const ImportReactFeatherAnswer = () => {
  return (
    <>
      <Heading isCentre level="h2">
        React Feather - Icon Solution
      </Heading>
      <Paragraph darkMode>Compare your solution with the code below:</Paragraph>
      <div className="mb-6">
        <CodeBlock
          snippet={importReactFeatherAnswerSnippet}
          showLineNumbers
          highlightAdditionalLines={[1, 8]}
        />
      </div>
      <Paragraph darkMode>
        And that's it! You've installed a custom NPM package and started using
        it in your project.
      </Paragraph>

      <div className="m-auto max-w-4xl">
        <InfoBlock>
          <Paragraph challengeBlock>
            Whenever you import a new NPM package to your project, be sure the
            read the documentation for it carefully.
          </Paragraph>
          <Paragraph challengeBlock>
            Documentation is often found on the GitHub page that hosts the
            package code, but bigger packages may have entire websites dedicated
            to them.
          </Paragraph>
          <Paragraph challengeBlock>
            And, of course, many packages will have tutorials and guides for
            beginners scattered across the Internet.
          </Paragraph>
          <Paragraph challengeBlock>
            Use your research skills to hunt down the best documentation, guides
            and tutorials for whatever packages you choose to install in your
            project.
          </Paragraph>
        </InfoBlock>
      </div>
    </>
  );
};

export default ImportReactFeatherAnswer;
