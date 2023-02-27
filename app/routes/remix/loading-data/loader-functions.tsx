import {
  getMembershipsSnippet,
  loadMembershipsOnPage,
} from "~/assets/codeSnippets/loadingData/loadingMembershipData";
import consoleLogMemberships from "~/assets/jpg/console-log-memberships.jpg";
import createMembershipServerFile from "~/assets/jpg/create-membership-server-file.jpg";
import MembershipsLoaderAnswer from "~/challengeComponents/remix/loaderFunctionChallenges/MembershipsLoaderAnswer";
import ChallengeBlock from "~/components/ChallengeBlock";
import CodeBlock from "~/components/CodeBlock";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import InlineMonoType from "~/components/InlineMonoType";
import InternalStyledLink from "~/components/InternalStyledLink";
import Paragraph from "~/components/Paragraph";
import RevealAnswerButton from "~/components/RevealAnswerButton";
import Screenshot from "~/components/Screenshot";
import useShowAnswer from "~/hooks/useShowAnswer";

const loaderFunctions = () => {
  const { isShowingAnswer, handleShowAnswer } = useShowAnswer();

  return (
    <>
      <Heading isCentre level="h2">
        Loader Functions
      </Heading>
      <InfoBlock title="Before starting...">
        <Paragraph className="mb-0" challengeBlock>
          Before starting this lesson, you should have completed the lesson on
          authentication{" "}
          <InternalStyledLink
            className="text-[1.5rem]"
            to="/remix/authentication/require-user-id"
          >
            here
          </InternalStyledLink>{" "}
          and the lesson on adding a new Prisma model that starts{" "}
          <InternalStyledLink
            className="text-[1.5rem]"
            to="/remix/prisma/adding-a-prisma-model/creating-a-table"
          >
            here
          </InternalStyledLink>
        </Paragraph>
      </InfoBlock>
      <Paragraph darkMode>
        Loader functions are how Remix handles fetching data from the backend
        database of your site to be displayed on a webpage.
      </Paragraph>
      <Paragraph darkMode>
        Any code written inside a loader function is executed on the server -
        not in the browser.
      </Paragraph>
      <Paragraph darkMode>
        We've already used a loader function in a{" "}
        <InternalStyledLink
          to="/remix/authentication/require-user-id"
          className="text-[1.5rem]"
        >
          previous lesson
        </InternalStyledLink>
        , namely when we needed a user to be signed in before we showed them a
        page.
      </Paragraph>
      <Paragraph darkMode>
        Now let's see how to load data from the backend and present it to the
        user.
      </Paragraph>
      <Heading level="h2" isCentre>
        Fetching data from the backend
      </Heading>
      <Paragraph darkMode>
        Let's start by writing a function that loads all the membership data
        from the backend.
      </Paragraph>
      <Paragraph darkMode>
        Begin by creating a new folder inside{" "}
        <InlineMonoType darkMode>app/models</InlineMonoType> called{" "}
        <InlineMonoType darkMode>membership.server.ts</InlineMonoType>:
      </Paragraph>

      <div className="mb-6">
        <Screenshot
          src={createMembershipServerFile}
          alt="Create app/models/membership.server.ts"
        />
      </div>

      <Paragraph darkMode>
        Inside this new file, copy and paste the code below, then save your
        work:
      </Paragraph>

      <div className="mb-6 px-6">
        <CodeBlock
          snippet={getMembershipsSnippet}
          showLineNumbers
          filePath="app/models/membership.server.ts"
        />
      </div>

      <Paragraph darkMode>
        💿 Now that the Prisma client has been updated, we will need to restart
        our server. So stop the dev server and start it back up again with{" "}
        <InlineMonoType darkMode>npm run dev</InlineMonoType>
      </Paragraph>

      <Heading isCentre level="h2">
        Loading memberships on a page
      </Heading>

      <Paragraph darkMode>
        Now head over to{" "}
        <InlineMonoType darkMode>app/routes/memberships.tsx</InlineMonoType>,
        and add the code below to your loader function:
      </Paragraph>

      <div className="mb-6 px-6">
        <CodeBlock
          snippet={loadMembershipsOnPage}
          showLineNumbers
          filePath="app/routes/memberships.tsx"
          hideCopyButton
          highlightAdditionalLines={[1, 2, 4, 10, 14, 15]}
        />
      </div>

      <Paragraph darkMode>
        Once you saved your changes, open up the memberships page and look at
        the browser console. You should be able to see the details of all the
        memberships you seeded in our{" "}
        <InternalStyledLink
          to="/remix/prisma/adding-a-prisma-model/seeding-data-challenge"
          className="text-[1.5rem]"
        >
          previous lesson
        </InternalStyledLink>
        :
      </Paragraph>

      <div className="mb-6 px-6">
        <Screenshot
          src={consoleLogMemberships}
          alt="Console log all membership details"
        />
      </div>

      <div className="px-6">
        <ChallengeBlock>
          <Paragraph challengeBlock>
            Now you have all of the membership data loaded onto the page, can
            you loop through this array to produce a{" "}
            <InlineMonoType challengeBlock>MembershipCard</InlineMonoType> for
            every <InlineMonoType challengeBlock>membership</InlineMonoType>?
          </Paragraph>
          <Paragraph challengeBlock>
            Each card produced should interpolate the{" "}
            <InlineMonoType challengeBlock>level</InlineMonoType>,{" "}
            <InlineMonoType challengeBlock>description</InlineMonoType> and{" "}
            <InlineMonoType challengeBlock>price</InlineMonoType> directly from
            the <InlineMonoType challengeBlock>membership</InlineMonoType>,
            replacing the hard-coded data that is currently present.
          </Paragraph>

          <div className="bg-black bg-opacity-50 p-6">
            <Paragraph challengeBlock>
              HINT: Remember that our{" "}
              <InlineMonoType challengeBlock>memberships</InlineMonoType> are
              arriving to us in the form of an array.
            </Paragraph>
            <Paragraph challengeBlock>
              Take a look at how JavaScript's{" "}
              <InlineMonoType challengeBlock>map</InlineMonoType> function can
              be used to{" "}
              <ExternalLink to="https://beta.reactjs.org/learn/rendering-lists#rendering-data-from-arrays">
                render data from arrays
              </ExternalLink>{" "}
              in a React component.
            </Paragraph>
          </div>
        </ChallengeBlock>
      </div>

      {!isShowingAnswer ? (
        <RevealAnswerButton onClick={handleShowAnswer} />
      ) : null}

      {isShowingAnswer ? <MembershipsLoaderAnswer /> : null}
    </>
  );
};

export default loaderFunctions;
