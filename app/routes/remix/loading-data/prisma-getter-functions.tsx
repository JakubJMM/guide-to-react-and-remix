import { getMembershipsSnippet } from "~/assets/codeSnippets/loadingData/loadingMembershipData";
import createMembershipServerFile from "~/assets/jpg/create-membership-server-file.jpg";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import InlineMonoType from "~/components/InlineMonoType";
import NextLessonLink from "~/components/NextLessonLink";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";

const PrismaGetterFunctions = () => {
  return (
    <>
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
        As the filename suggests, all the code in here will be responsible for
        actions on the <strong className="font-bold">server</strong>, namely
        talking to the database.
      </Paragraph>

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

      <div className="mx-auto max-w-5xl px-6">
        <InfoBlock title="What is this doing?">
          <Paragraph challengeBlock>
            This is where we start to use Prisma to talk to the database.
          </Paragraph>
          <Paragraph challengeBlock>
            1. Firsly, we <InlineMonoType challengeBlock>import</InlineMonoType>{" "}
            our <InlineMonoType challengeBlock>prisma</InlineMonoType> instance,
            which is the connection to our database.
          </Paragraph>
          <Paragraph challengeBlock>
            2. We then define a function called{" "}
            <InlineMonoType challengeBlock>getMemberships()</InlineMonoType>,
            which we <InlineMonoType challengeBlock>export</InlineMonoType> so
            it can be used elsewhere in the project. Notice how this is an{" "}
            <InlineMonoType challengeBlock>async</InlineMonoType> function -
            accessing information in a database takes time, so it needs to
            happen asynchronously.
          </Paragraph>
          <Paragraph challengeBlock>
            3. Inside the body of the{" "}
            <InlineMonoType challengeBlock>getMemberships()</InlineMonoType>{" "}
            function, we call our{" "}
            <InlineMonoType challengeBlock>prisma</InlineMonoType> database
            connection, to access the{" "}
            <InlineMonoType challengeBlock>membership</InlineMonoType> model and
            load all of the records it contains.
          </Paragraph>
          <Paragraph challengeBlock>
            4. We then simply{" "}
            <InlineMonoType challengeBlock>return</InlineMonoType> all of these
            records from the function.
          </Paragraph>
        </InfoBlock>
      </div>

      <Paragraph darkMode>
        💿 Now that the Prisma client has been updated, we will need to restart
        our server. Stop the dev server and start it back up again with{" "}
        <InlineMonoType darkMode>npm run dev</InlineMonoType>
      </Paragraph>

      <Paragraph darkMode>
        In the next step, we will use a loader function to get the data from
        this backend data into the{" "}
        <InlineMonoType darkMode>/memberships</InlineMonoType> route.
      </Paragraph>

      <NextLessonLink to="/remix/loading-data/loader-functions">
        Loading data on a page
      </NextLessonLink>
    </>
  );
};

export default PrismaGetterFunctions;
