import { SandpackSetup } from "@codesandbox/sandpack-react";
import { reactShareChallenge } from "~/assets/codeSnippets/installingNpmPackages/reactShareChallenge";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodePlayground from "~/components/CodePlayground";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import ListItem from "~/components/ListItem";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";
import basicShareSolution from "~/assets/jpg/add-react-share-basic-solution.jpg";
import advancedShareSolution from "~/assets/jpg/add-react-share-advanced-solution.jpg";
import { useState } from "react";
import ReactShareCodeAnswer from "./ReactShareCodeAnswer";
import RevealAnswerButton from "~/components/RevealAnswerButton";

const reactShareSetup: SandpackSetup = {
  dependencies: {
    "react-share": "^4.4.1",
  },
};
const reactShareFiles = {
  "/App.tsx": `import Share from './share.tsx';

  export default function App(): JSX.Element {
    return <Share />;
  }
  `,
  "/share.tsx": { active: true, code: reactShareChallenge },
};

const InstallReactShareAnswer = () => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleShowReactShareAnswer = () => {
    setIsShowingAnswer(true);
  };

  return (
    <>
      <Heading isCentre level="h2">
        Install React Share - Solution
      </Heading>
      <Paragraph darkMode>
        Watch the gif below to see how to install React Share to your project.
      </Paragraph>

      <div className="mb-6">
        <Screenshot
          src="https://res.cloudinary.com/dptdx8zuv/image/upload/v1677150996/react-introduction/npm_install_react_share.gif"
          alt="Installing React Share via NPM"
        />
      </div>

      <Paragraph darkMode>
        Excellent. So now React Share is installed in your project, how do you
        use it in your code?
      </Paragraph>

      <ChallengeBlock>
        <Paragraph challengeBlock>
          Read through the{" "}
          <ExternalLink
            to="https://github.com/nygardk/react-share#api"
            challengeBlock
          >
            React Share documentation
          </ExternalLink>{" "}
          carefully.
        </Paragraph>
        <Paragraph challengeBlock>
          Can you add a Facebook share button to the code below that takes a
          <InlineMonoType challengeBlock>url</InlineMonoType> prop pointing to
          <InlineMonoType challengeBlock>https://www.google.com</InlineMonoType>
          ? This is simply for testing purposes to get the button working. On a
          real website you would replace this with the URL of the page you want
          to share.
        </Paragraph>
        <Paragraph challengeBlock>
          NOTE: You might find that even when the button works, it opens a modal
          that says Facebook has been blocked. This is a limitation of the
          CodeSandbox below. If you use the same code on a real page in your
          project, you will see that it works as expected
        </Paragraph>
        <div className="bg-neutral-900 bg-opacity-50 p-6">
          <Heading className="mt-2" isCentre level="h2">
            🚀 Extra Credit
          </Heading>
          <Paragraph challengeBlock>Can you add the following?</Paragraph>
          <ul className="ml-8">
            <ListItem darkMode>
              Add a horizontal row of buttons going to Facebook, Twitter and
              Pinterest
            </ListItem>
            <ListItem darkMode>Make the buttons rounded</ListItem>
            <ListItem darkMode>
              Resize the actual icons - make them as big or small as you think
              looks good.
            </ListItem>
          </ul>
        </div>
        <div className="lg:flex">
          <div className="p-2 lg:w-1/2">
            <Heading className="mb-2" isCentre level="h3">
              Basic Solution
            </Heading>
            <Screenshot
              challengeBlock
              src={basicShareSolution}
              alt="Basic React share solution"
            />
          </div>
          <div className="p-2 lg:w-1/2">
            <Heading className="mb-2" isCentre level="h3">
              Extra Credit Solution
            </Heading>
            <Screenshot
              challengeBlock
              src={advancedShareSolution}
              alt="Extra credit React share solution"
            />
          </div>
        </div>
      </ChallengeBlock>

      <CodePlayground
        id="react-share-challenge"
        customSetup={reactShareSetup}
        files={reactShareFiles}
        showTabs={false}
        title="Share.tsx"
      />
      {!isShowingAnswer ? (
        <RevealAnswerButton onClick={handleShowReactShareAnswer} />
      ) : null}

      {isShowingAnswer ? <ReactShareCodeAnswer /> : null}
    </>
  );
};

export default InstallReactShareAnswer;
