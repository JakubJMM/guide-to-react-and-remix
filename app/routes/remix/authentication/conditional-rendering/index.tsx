import { useState } from "react";
import {
  addLoginButtonToNavbar,
  addLogoutButtonToNavbar,
  redirectToMembershipsSnippet,
} from "~/assets/codeSnippets/authentication/useOptionalUserSnippets";
import loginAndLogoutButtons from "~/assets/jpg/login-and-logout-buttons-together.jpg";
import loginButton from "~/assets/jpg/login-button-in-navbar.jpg";
import ConditionalRenderingAnswer from "~/challengeComponents/remix/authenticationChallenge/ConditionalRenderingAnswer";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodeBlock from "~/components/CodeBlock";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";
import RevealAnswerButton from "~/components/RevealAnswerButton";
import Screenshot from "~/components/Screenshot";

const ConditionalRendering = () => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleShowConditionalRenderingAnswer = () => {
    setIsShowingAnswer(true);
  };

  return (
    <>
      <Heading isCentre level="h2">
        Conditional Rendering - add a login button
      </Heading>
      <Paragraph darkMode>
        First, lets replace the current dummy 'Login' link at the end of our{" "}
        <InlineMonoType darkMode>NavBar</InlineMonoType> with one that really
        works.
      </Paragraph>
      <Paragraph darkMode>
        Delete the line highlighted in red and add the code shown in green.
      </Paragraph>

      <div className="mb-6">
        <CodeBlock
          snippet={addLoginButtonToNavbar}
          showLineNumbers
          filePath="app/components/Navbar/index.tsx"
          highlightAdditionalLines={[1, 12, 13, 14, 15, 16, 17, 18]}
          highlightSubtractedLines={[11]}
          hideCopyButton
        />
      </div>

      <div className="mx-auto lg:max-w-4xl">
        <InfoBlock title="What is this doing?">
          <Paragraph challengeBlock>
            We are importing the{" "}
            <InlineMonoType challengeBlock>Link</InlineMonoType> component from
            Remix, and assigning its{" "}
            <InlineMonoType challengeBlock>type</InlineMonoType> prop as a{" "}
            <InlineMonoType challengeBlock>button</InlineMonoType>.
          </Paragraph>
          <Paragraph challengeBlock>
            It is providing a straightforward link to the login page. That's it!
          </Paragraph>
        </InfoBlock>
      </div>

      <Paragraph darkMode>
        When you open the site in Chrome, you should see the button rendered at
        the end of the navigation bar:
      </Paragraph>

      <div className="mb-6">
        <Screenshot src={loginButton} alt="Login button inside the Navbar" />
      </div>

      <Paragraph darkMode>
        If you click the new login button and sign in, you will be taken to a
        Notes page found at <InlineMonoType darkMode>/notes</InlineMonoType>.
        This is part of the Remix stack's boilerplate code to help you get
        started. We can ignore all of this 'Notes' code, but if you are
        interested, feel free to take a look around this code in both the{" "}
        <InlineMonoType darkMode>app/routes/notes.tsx</InlineMonoType> file and
        the <InlineMonoType darkMode>app/routes/notes</InlineMonoType> folder.
      </Paragraph>
      <Paragraph darkMode>
        Let's change the login behaviour, so that users are taken to the{" "}
        <InlineMonoType darkMode>/memberships</InlineMonoType> route instead
        after signing in.
      </Paragraph>
      <Paragraph darkMode>
        Change the code below in{" "}
        <InlineMonoType darkMode>app/routes/login.tsx</InlineMonoType>:
      </Paragraph>

      <div className="mb-6 px-6">
        <CodeBlock
          snippet={redirectToMembershipsSnippet}
          showLineNumbers
          filePath="app/routes/login.tsx"
          hideCopyButton
          highlightSubtractedLines={[7, 15]}
          highlightAdditionalLines={[8, 16]}
        />
      </div>

      <Heading isCentre level="h2">
        Add a logout button
      </Heading>

      <Paragraph darkMode>
        Now let's add a logout button as well. Carefully insert the code
        highlighted in green below:
      </Paragraph>

      <div className="mb-6">
        <CodeBlock
          snippet={addLogoutButtonToNavbar}
          showLineNumbers
          filePath="app/components/Navbar/index.tsx"
          highlightAdditionalLines={[1, 11, 12, 13, 14, 15, 16, 17, 18]}
          hideCopyButton
        />
      </div>

      <div className="mx-auto lg:max-w-4xl">
        <InfoBlock title="What is this doing?">
          <Paragraph challengeBlock>
            You'll notice our logout button is nested inside Remix's
            <InlineMonoType challengeBlock>Form</InlineMonoType> component.
          </Paragraph>
          <Paragraph challengeBlock>
            This is because logging out is actually a{" "}
            <InlineMonoType challengeBlock>POST</InlineMonoType> action done
            over HTTP, and this can only be generated through a HTML form.
          </Paragraph>
        </InfoBlock>
      </div>

      <Paragraph darkMode>
        When saved, you should be able to see both the login and logout buttons
        together:
      </Paragraph>

      <div className="mb-6">
        <Screenshot
          src={loginAndLogoutButtons}
          alt="Login and logout buttons together in the Navbar"
        />
      </div>

      <ChallengeBlock title="Show one button or the other?">
        <Paragraph challengeBlock>
          We definitely don't want both buttons to show at the same time.
        </Paragraph>
        <Paragraph challengeBlock>
          Can you update the{" "}
          <InlineMonoType challengeBlock>Navbar</InlineMonoType> code so that it
          only shows the 'Login' button if the user is logged out, and the
          'Logout' button if the user is logged in?
        </Paragraph>

        <div className="bg-neutral-900 bg-opacity-50 p-12">
          <Paragraph className="mb-0" challengeBlock>
            HINT: take a look at how the{" "}
            <ExternalLink to="https://github.com/remix-run/indie-stack/blob/6d4807f91d2f7984c964e80f632ab9b458fafb1c/app/routes/index.tsx#L31">
              original code
            </ExternalLink>{" "}
            on the Indie Stack's homepage handles a similar problem.
          </Paragraph>
        </div>
      </ChallengeBlock>

      {!isShowingAnswer ? (
        <RevealAnswerButton onClick={handleShowConditionalRenderingAnswer} />
      ) : null}

      {isShowingAnswer ? <ConditionalRenderingAnswer /> : null}
    </>
  );
};

export default ConditionalRendering;
