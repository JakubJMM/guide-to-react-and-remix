import { useState } from "react";
import {
  creatingUserAttributesSnippet,
  originalCreateUserSnippetComplete,
  originalPrismaCreateUserSnippet,
} from "~/assets/codeSnippets/addingAModel/seedingDataSnippets";
import userDataScreenshot from "~/assets/prisma-studio-user-data.png";
import CodeBlock from "~/components/CodeBlock";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import InternalStyledLink from "~/components/InternalStyledLink";
import Paragraph from "~/components/Paragraph";
import RevealAnswerButton from "~/components/RevealAnswerButton";
import Screenshot from "~/components/Screenshot";

const SeedingData = () => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const handleClick = () => {
    setIsShowingAnswer(true);
  };

  return (
    <div>
      <Heading level="h2">Seeding Data</Heading>
      <Paragraph darkMode>
        If you haven't still got Prisma Studio open in your browser, run the
        command below in your terminal:
      </Paragraph>
      <div className="my-6">
        <CodeBlock language="shell" snippet="npx prisma studio" />
      </div>
      <Paragraph darkMode>
        Once you see the Prisma Studio window, click to open the{" "}
        <InlineMonoType darkMode>User</InlineMonoType> table.
      </Paragraph>
      <div className="my-6">
        <Screenshot src={userDataScreenshot} alt="Seeded user data entry" />
      </div>
      <Paragraph darkMode>Where did this data come from? 🤔</Paragraph>
      <Paragraph darkMode>
        It was actually generated automatically when you installed the Remix
        Indie Stack on your machine, and came from the file at{" "}
        <InlineMonoType darkMode>prisma/seed.ts</InlineMonoType>.
      </Paragraph>
      <Paragraph darkMode>Open the file now and take a look inside:</Paragraph>
      <div className="my-6">
        <CodeBlock
          snippet={originalCreateUserSnippetComplete}
          showLineNumbers
          filePath="prisma/seed.ts"
        />
      </div>
      <Paragraph darkMode>
        Can you can work out what this code is doing?
      </Paragraph>

      {!isShowingAnswer ? (
        <div className="my-6">
          <RevealAnswerButton onClick={handleClick} />
        </div>
      ) : null}

      {isShowingAnswer ? (
        <>
          <Heading level="h2">Understanding the seed function</Heading>
          <Paragraph darkMode>
            After importing the packages needed at the top of the file, an
            instance of the Prisma client is instantiated:
          </Paragraph>
          <div className="my-6">
            <CodeBlock
              snippet={`const prisma = new PrismaClient();`}
              showLineNumbers
              filePath="prisma/seed.ts"
            />
          </div>
          <Paragraph darkMode>
            After this, we then create a new function called{" "}
            <InlineMonoType darkMode>seed</InlineMonoType>, and create the
            attributes required for our new user:
          </Paragraph>
          <div className="my-6">
            <CodeBlock
              snippet={creatingUserAttributesSnippet}
              showLineNumbers
              filePath="prisma/seed.ts"
            />
          </div>
          <Paragraph darkMode>
            This creates an <InlineMonoType darkMode>email</InlineMonoType>{" "}
            address for the user, deletes any users that might have the same
            email from a previous database seed, and then creates a{" "}
            <ExternalLink to="https://blog.1password.com/what-is-hashed-password/">
              hashed password
            </ExternalLink>
            .
          </Paragraph>
          <Paragraph darkMode>
            Finally, we use all this information to create a new record on the{" "}
            <InlineMonoType darkMode>User</InlineMonoType> table via Prisma's{" "}
            <InlineMonoType darkMode>create</InlineMonoType> method:
          </Paragraph>
          <div className="my-6">
            <CodeBlock
              snippet={originalPrismaCreateUserSnippet}
              showLineNumbers
              filePath="prisma/seed.ts"
            />
          </div>
          <Paragraph darkMode>
            Let's have a go at adding some seed data for the new{" "}
            <InlineMonoType darkMode>Membership</InlineMonoType> model in our{" "}
            <InternalStyledLink
              to="/remix/prisma/adding-a-prisma-model/seeding-data-challenge"
              className="text-2xl"
            >
              next step
            </InternalStyledLink>
            .
          </Paragraph>
        </>
      ) : null}
    </div>
  );
};

export default SeedingData;
