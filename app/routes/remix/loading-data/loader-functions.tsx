import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import InlineMonoType from "~/components/InlineMonoType";
import InternalStyledLink from "~/components/InternalStyledLink";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";
import createMembershipServerFile from "~/assets/jpg/create-membership-server-file.jpg";
import CodeBlock from "~/components/CodeBlock";
import {
  getMembershipsSnippet,
  loadMembershipsOnPage,
} from "~/assets/codeSnippets/loadingData/loadingMembershipData";

const loaderFunctions = () => {
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
        database of your site in a way that can be displayed on a webpage.
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

      <div className="mb-6">
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

      <div className="mb-6">
        <CodeBlock
          snippet={loadMembershipsOnPage}
          showLineNumbers
          filePath="app/routes/memberships.tsx"
          hideCopyButton
          highlightAdditionalLines={[1, 2, 4, 10, 14, 15]}
        />
      </div>
    </>
  );
};

export default loaderFunctions;
