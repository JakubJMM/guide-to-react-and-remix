import { SandpackSetup } from "@codesandbox/sandpack-react";
import { importReactFeatherSnippet } from "~/assets/codeSnippets/installingNpmPackages/importReactFeatherChallenge";
import reactFeatherHomepage from "~/assets/jpg/react-feather-homepage.jpg";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodePlayground from "~/components/CodePlayground";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";
import finalDesign from "~/assets/jpg/react-feather-final-design.jpg";
import { useState } from "react";
import RevealAnswerButton from "~/components/RevealAnswerButton";
import ImportReactFeatherAnswer from "./ImportReactFeatherAnswer";
import ExternalLink from "~/components/ExternalLink";

const reactFeatherFiles = {
  "/App.tsx": `import Photography from './photography.tsx';

  export default function App(): JSX.Element {
    return <Photography />;
  }
  `,
  "/photography.tsx": { active: true, code: importReactFeatherSnippet },
};

const reactFeatherSetup: SandpackSetup = {
  dependencies: {
    "react-feather": "^2.0.10",
  },
};

const InstallReactFeatherAnswer = () => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleImportReactFeatherAnswer = () => {
    setIsShowingAnswer(true);
  };

  return (
    <>
      <Heading isCentre level="h2">
        Installing React Feather - Solution
      </Heading>
      <Paragraph darkMode>
        Watch the gif below to see how to install the React Feather package into
        your project:
      </Paragraph>
      <div className="mb-6">
        <Screenshot
          src="https://res.cloudinary.com/dptdx8zuv/image/upload/v1677076270/react-introduction/npm-install-react-feather_yhydxb.gif"
          alt="Installing React Feather via NPM"
        />
      </div>
      <Paragraph darkMode>
        Perfect - now we have React Feather installed, how do we learn how to
        use it?
      </Paragraph>
      <Paragraph darkMode>
        To the right of the React Feather NPM page are two links: one headed
        'Repository' and the other 'Homepage'. In this case, they both link to
        different places on the same webpage, so click{" "}
        <ExternalLink to="https://github.com/feathericons/react-feather#readme">
          Homepage
        </ExternalLink>{" "}
        to go straight to the instructions:
      </Paragraph>
      <div className="mb-6">
        <Screenshot
          src={reactFeatherHomepage}
          alt="The React Feather homepage"
        />
      </div>
      <Paragraph darkMode>
        You'll notice this is just a Github repository README document! This is
        quite common for smaller NPM packages like React Feather that don't have
        dedicated websites.
      </Paragraph>
      <Paragraph darkMode>
        At the top of the README are the installation instructions again, but
        just below this you can see a section headed{" "}
        <ExternalLink to="https://github.com/feathericons/react-feather#usage">
          Usage
        </ExternalLink>
        .
      </Paragraph>
      <Paragraph darkMode>
        Read the 'Usage' section carefully, then have a go at the challenge
        below:
      </Paragraph>

      <div className="m-auto max-w-4xl">
        <ChallengeBlock>
          <Paragraph challengeBlock>
            Using the interactive code block below, import the 'Camera' icon
            from React Feather and place it above the 'Free Photography
            Lessons!' heading text.
          </Paragraph>

          <Paragraph challengeBlock>
            Style the 'Camera' icon using the following Tailwind CSS classes:{" "}
            <InlineMonoType challengeBlock>
              "fill-blue-100 stroke-blue-90"
            </InlineMonoType>{" "}
            and give it a <InlineMonoType challengeBlock>size</InlineMonoType>{" "}
            of <InlineMonoType challengeBlock>"12rem"</InlineMonoType>
          </Paragraph>

          <Paragraph challengeBlock>
            Your final design should look something like this:
          </Paragraph>

          <Screenshot
            challengeBlock
            src={finalDesign}
            alt="The final design with the React Feather 'Camera' icon"
          />
        </ChallengeBlock>
      </div>

      <CodePlayground
        id="react-feather-challenges"
        customSetup={reactFeatherSetup}
        files={reactFeatherFiles}
        showTabs={false}
        title="Photography.tsx"
      />

      {!isShowingAnswer ? (
        <RevealAnswerButton onClick={handleImportReactFeatherAnswer} />
      ) : null}

      {isShowingAnswer ? <ImportReactFeatherAnswer /> : null}
    </>
  );
};

export default InstallReactFeatherAnswer;
