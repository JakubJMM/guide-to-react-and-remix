import { Link } from "@remix-run/react";
import addMembershipsRouteImage from "~/assets/add-memberships-route.png";
import { basicMembershipSnippet } from "~/assets/codeSnippets/addMembershipsRoute/membershipRouteSnippets";
import membershipsStartPage from "~/assets/jpg/membership-page-start.jpg";
import CodeBlock from "~/components/CodeBlock";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import NextLessonLink from "~/components/NextLessonLink";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";

const AddARouteFile = () => {
  return (
    <>
      <Heading isCentre level="h2">
        Add a route file
      </Heading>
      <div className="lg:flex">
        <div className="flex flex-col items-start justify-center p-2 lg:w-1/2">
          <Paragraph darkMode>Adding a new page is easy in Remix.</Paragraph>
          <Paragraph darkMode>
            Inside the <InlineMonoType darkMode>app/routes</InlineMonoType>{" "}
            folder in your project, create a new file whose filename matches the
            new route you want to create.
          </Paragraph>
          <Paragraph darkMode>
            So if you wanted to create a page on your website that had the URL{" "}
            <InlineMonoType darkMode>
              http://localhost:3000/my-new-route
            </InlineMonoType>
            , you would create a new file at{" "}
            <InlineMonoType darkMode>
              app/routes/my-new-route.tsx
            </InlineMonoType>
            .{" "}
          </Paragraph>
          <Paragraph darkMode>
            In this case, we want to create a new route that will be reached at{" "}
            <Link to="/memberships">
              <InlineMonoType darkMode>
                http://localhost:3000/memberships
              </InlineMonoType>
            </Link>
            , so we will create a file at{" "}
            <InlineMonoType darkMode>app/routes/memberships.tsx</InlineMonoType>
            .{" "}
          </Paragraph>
          <Paragraph darkMode>Click the screenshot opposite to see.</Paragraph>
        </div>
        <div className="h-full p-6 lg:w-1/2">
          <Screenshot
            src={addMembershipsRouteImage}
            alt="Adding a new membership route file"
          />
        </div>
      </div>
      <Paragraph darkMode>
        Copy and paste the code below into this new file:
      </Paragraph>
      <div className="my-6">
        <CodeBlock
          snippet={basicMembershipSnippet}
          showLineNumbers
          filePath="app/routes/memberships.tsx"
        />
      </div>
      <Paragraph darkMode>
        Save your file, start your server with{" "}
        <InlineMonoType darkMode>npm run dev</InlineMonoType> and head over to{" "}
        <ExternalLink to="http://localhost:3000/memberships">
          http://localhost:3000/memberships
        </ExternalLink>
        . You should see the page below:
      </Paragraph>
      <div className="my-6">
        <Screenshot
          src={membershipsStartPage}
          alt="The memberships starting page"
        />
      </div>
      <Paragraph darkMode>
        This is great, but uses a lot of repeated code to create the membership
        cards. Let's fix that in the next lesson.
      </Paragraph>
      <NextLessonLink to="/remix/routing-in-remix/adding-a-new-page/importing-components">
        Next: Create a membership card component
      </NextLessonLink>
    </>
  );
};

export default AddARouteFile;
