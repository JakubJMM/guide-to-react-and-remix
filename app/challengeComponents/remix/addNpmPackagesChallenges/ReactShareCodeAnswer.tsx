import {
  reactShareAdvancedSolution,
  reactShareBasicSolution,
} from "~/assets/codeSnippets/installingNpmPackages/reactShareChallenge";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import Paragraph from "~/components/Paragraph";
import TabNavigation, { Tab } from "~/components/TabNavigation";

const codeTabs: Tab[] = [
  {
    label: "Basic Solution",
    content: <CodeBlock snippet={reactShareBasicSolution} showLineNumbers />,
  },
  {
    label: "Extra Credit Solution",
    content: <CodeBlock snippet={reactShareAdvancedSolution} showLineNumbers />,
  },
];

const ReactShareCodeAnswer = () => {
  return (
    <>
      <Heading isCentre level="h2">
        React Share Code Solution
      </Heading>
      <Paragraph darkMode>
        Compare the code below for both the basic and extra credit solutions
        with your own:
      </Paragraph>

      <div className="mb-6">
        <TabNavigation tabs={codeTabs} />
      </div>

      <Paragraph darkMode>
        Perfect - you can now integrate social networking functionality into
        your site using only a few lines of code.
      </Paragraph>
    </>
  );
};

export default ReactShareCodeAnswer;
