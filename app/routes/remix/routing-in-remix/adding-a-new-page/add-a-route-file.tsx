import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";
import addMembershipsRouteImage from "~/assets/add-memberships-route.png";
import Screenshot from "~/components/Screenshot";
import CodeBlock from "~/components/CodeBlock";
import { basicMembershipSnippet } from "~/assets/codeSnippets/addMembershipsRoute/membershipRouteSnippets";

const AddARouteFile = () => {
  return (
    <>
      <Heading level="h2">Add a route file</Heading>
      <div className="lg:flex">
        <div className="flex flex-col justify-center p-2">
          <Paragraph darkMode>Adding a new page is easy in Remix.</Paragraph>
          <Paragraph darkMode>
            Inside the <InlineMonoType darkMode>app/routes</InlineMonoType>{" "}
            folder in your project, create a new file whose filename matches the
            new route you want to create. Click the screenshot opposite to see.
          </Paragraph>
        </div>
        <div className="p-2s h-full">
          <Screenshot
            src={addMembershipsRouteImage}
            alt="Adding a new membership route file"
          />
        </div>
      </div>
      <Paragraph darkMode>
        Copy and paste the code below into this new file:
      </Paragraph>
      <CodeBlock
        snippet={basicMembershipSnippet}
        showLineNumbers
        filePath="app/routes/memberships.tsx"
      />
    </>
  );
};

export default AddARouteFile;
