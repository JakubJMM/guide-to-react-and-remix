import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";
import npmReactFeatherPage from "~/assets/jpg/react-feather-npm-page.jpg";
import ChallengeBlock from "~/components/ChallengeBlock";
import { useState } from "react";
import RevealAnswerButton from "~/components/RevealAnswerButton";
import InstallReactFeatherAnswer from "~/challengeComponents/remix/addNpmPackagesChallenges/InstallReactFeatherAnswer";

interface ReactFeatherProps {
  children: React.ReactNode;
}

const ReactFeather = ({ children }: ReactFeatherProps) => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleShowInstallReactFeathersAnswer = () => {
    setIsShowingAnswer(true);
  };

  return (
    <>
      <Heading isCentre level="h2">
        React Feather
      </Heading>
      <Paragraph darkMode>
        Remix and React are a powerful combination, but there are always
        features of a custom website that cannot be accommodated by these alone.
      </Paragraph>
      <Paragraph darkMode>
        This is why we install packages via NPM (Node Package Manage) to extend
        a website's functionality. Packages are bundles of code that allow you
        to add custom functionality to your site that don't need writing from
        scratch.
      </Paragraph>
      <Paragraph darkMode>
        For example, it is likely you will want to use icons in navigation
        menus, page and modals.
      </Paragraph>
      <Paragraph darkMode>
        Let's install a new package called React Feather to help with just this
        problem.
      </Paragraph>

      <Heading isCentre level="h2">
        Installing a new package
      </Heading>
      <Paragraph darkMode>
        Thousands of Node packages are hosted at{" "}
        <ExternalLink to="https://www.npmjs.com/">
          https://www.npmjs.com
        </ExternalLink>
        . Each package has its own page containing installation instructions and
        links to external sites that usually provide additional information on
        usage.
      </Paragraph>
      <Paragraph darkMode>
        Let's visit the NPM page for{" "}
        <ExternalLink to="https://www.npmjs.com/package/react-feather">
          React Feather
        </ExternalLink>
        , a package that gives us quick access to a range of beautifully
        designed icons you can easily drop into your codebase:
      </Paragraph>

      <div className="mb-6">
        <Screenshot
          src={npmReactFeatherPage}
          alt="The NPM page for React Feather"
        />
      </div>

      <div className="mb-6">
        <ChallengeBlock>
          <Paragraph challengeBlock>
            Using the information on the{" "}
            <ExternalLink
              challengeBlock
              to="https://www.npmjs.com/package/react-feather"
            >
              React Feather NPM page
            </ExternalLink>
            , can you find the command needed to install the package into your
            project?
          </Paragraph>
          <Paragraph challengeBlock>
            Copy and paste this command into the VS Code terminal at the root of
            your project folder, then hit return to see it installed.
          </Paragraph>
        </ChallengeBlock>
      </div>

      {!isShowingAnswer ? (
        <RevealAnswerButton onClick={handleShowInstallReactFeathersAnswer} />
      ) : null}

      {isShowingAnswer ? <InstallReactFeatherAnswer /> : null}
    </>
  );
};

export default ReactFeather;
