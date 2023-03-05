import { useState } from "react";
import InstallReactShareAnswer from "~/challengeComponents/remix/addNpmPackagesChallenges/InstallReactShareAnswer";
import ChallengeBlock from "~/components/ChallengeBlock";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InternalStyledLink from "~/components/InternalStyledLink";
import Paragraph from "~/components/Paragraph";
import RevealAnswerButton from "~/components/RevealAnswerButton";

interface ReactShareProps {
  children: React.ReactNode;
}

const ReactShare = ({ children }: ReactShareProps) => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleShowInstallReactShareAnswer = () => {
    setIsShowingAnswer(true);
  };

  return (
    <>
      <Heading level="h2">React Share</Heading>
      <Paragraph darkMode>
        It is common to share interesting content online with others using
        social media platforms like Twitter, Facebook and Instagram.
      </Paragraph>
      <Paragraph darkMode>
        React Share is an NPM package that makes adding this functionality a
        breeze.
      </Paragraph>

      <ChallengeBlock>
        <Paragraph challengeBlock>
          Read the NPM installation instructions over on the{" "}
          <ExternalLink to="https://github.com/nygardk/react-share#install">
            React Share Github page
          </ExternalLink>
          .
        </Paragraph>
        <Paragraph challengeBlock>
          Using your knowledge of installing NPM packages from our{" "}
          <InternalStyledLink
            challengeBlock
            className="text-[1.5rem]"
            to="/remix/adding-npm-packages/react-feather"
          >
            previous lesson
          </InternalStyledLink>
          , can you install React Share into your project?
        </Paragraph>
      </ChallengeBlock>

      {!isShowingAnswer ? (
        <RevealAnswerButton onClick={handleShowInstallReactShareAnswer} />
      ) : null}

      {isShowingAnswer ? <InstallReactShareAnswer /> : null}
    </>
  );
};

export default ReactShare;
