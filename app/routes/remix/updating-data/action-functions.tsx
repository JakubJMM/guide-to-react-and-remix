import {
  addTestActionFunctionSnippet,
  addUseSubmitSnippet,
} from "~/challengeComponents/remix/updatingDataSnippets/actionFunctions";
import CodeBlock from "~/components/CodeBlock";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import InlineMonoType from "~/components/InlineMonoType";
import InternalStyledLink from "~/components/InternalStyledLink";
import Paragraph from "~/components/Paragraph";
import actionFunctionConsoleLog from "~/assets/jpg/action-function-console-log.jpg";
import Screenshot from "~/components/Screenshot";
import NextLessonLink from "~/components/NextLessonLink";

const ActionFunctions = () => {
  return (
    <>
      <Heading level="h2" isCentre>
        Action Functions
      </Heading>
      <Paragraph darkMode>
        Just like we have{" "}
        <InternalStyledLink
          className="text-[1.5rem]"
          to="/remix/loading-data/loader-functions"
        >
          loader functions
        </InternalStyledLink>{" "}
        to get information from a database, Remix gives us{" "}
        <ExternalLink to="https://remix.run/docs/en/1.14.0/route/action">
          action functions
        </ExternalLink>{" "}
        to update or create data.
      </Paragraph>

      <Paragraph darkMode>
        Normally, a form is submitted with a submit button, but in our case we
        want it to submit automatically when a user selects a different
        membership level.
      </Paragraph>

      <Paragraph darkMode>
        This is possible with Remix's{" "}
        <InlineMonoType darkMode>useSubmit</InlineMonoType> hook. Let's add that
        now:
      </Paragraph>

      <div className="mb-6 px-6">
        <CodeBlock
          snippet={addUseSubmitSnippet}
          filePath="app/routes/memberships.tsx"
          showLineNumbers
          hideCopyButton
          highlightAdditionalLines={[2, 9, 12]}
        />
      </div>

      <Paragraph darkMode>
        Finally, we need to add our{" "}
        <InlineMonoType darkMode>action()</InlineMonoType> function. Let's put
        this in between our <InlineMonoType darkMode>loader</InlineMonoType> and{" "}
        <InlineMonoType darkMode>Memberships</InlineMonoType> functions:
      </Paragraph>

      <div className="mb-6 px-6">
        <CodeBlock
          snippet={addTestActionFunctionSnippet}
          filePath="app/routes/memberships.tsx"
          showLineNumbers
          hideCopyButton
          highlightAdditionalLines={[1, 11, 12, 13, 14, 15, 16, 17, 18, 19]}
        />
      </div>

      <div className="mx-auto mb-6 max-w-5xl px-6">
        <InfoBlock title="What is this doing?">
          <Paragraph challengeBlock>
            Like <InlineMonoType challengeBlock>loader</InlineMonoType>{" "}
            functions, <InlineMonoType challengeBlock>action</InlineMonoType>{" "}
            functions are executed on the server only.
          </Paragraph>
          <Paragraph challengeBlock>
            Remix calls actions before loaders, so if a non-GET request is made
            to your route (POST, PUT, PATCH, DELETE) then the{" "}
            <InlineMonoType challengeBlock>action</InlineMonoType> is called
            first.
          </Paragraph>

          <Paragraph challengeBlock>
            It takes a <InlineMonoType challengeBlock>request</InlineMonoType>{" "}
            as its argument, from which we are able to extract the{" "}
            <InlineMonoType challengeBlock>formData</InlineMonoType> we have
            submitted via a <InlineMonoType challengeBlock>get</InlineMonoType>{" "}
            method.
          </Paragraph>

          <Paragraph challengeBlock>
            After saving your changes, open the{" "}
            <InlineMonoType challengeBlock>/memberships</InlineMonoType> route
            in your browser and click to select a membership level.
          </Paragraph>

          <Paragraph challengeBlock>
            If everything has worked correctly, you should see the{" "}
            <InlineMonoType challengeBlock>userId</InlineMonoType> and{" "}
            <InlineMonoType challengeBlock>membershipId</InlineMonoType> logged
            into your VS Code terminal:
          </Paragraph>

          <div className="mb-6">
            <Screenshot
              challengeBlock
              src={actionFunctionConsoleLog}
              alt="Logging to the console from an action function"
            />
          </div>

          <div className="bg-black bg-opacity-20 p-6">
            <Paragraph className="mb-0" challengeBlock>
              Remember -{" "}
              <em className="italic">
                you won't see this in your browser console
              </em>{" "}
              because action functions are only executed on the server. You will
              need to check the VS Code terminal to see this data being logged.
            </Paragraph>
          </div>
        </InfoBlock>
      </div>

      <NextLessonLink to="/remix/updating-data/update-user-membership">
        Next: Update user membership
      </NextLessonLink>
    </>
  );
};

export default ActionFunctions;
