import {
  importMembershipCardSnippet,
  membershipCardComponentAnswer,
  membershipCardFileExportSnippet,
} from "~/assets/codeSnippets/addMembershipsRoute/membershipRouteSnippets";
import CodeBlock from "~/components/CodeBlock";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";
import addComponentsFolder from "~/assets/jpg/add-components-folder.jpg";
import createMembershipCardFile from "~/assets/jpg/create-membership-card-file.jpg";

const AddMembershipCardAnswer = () => {
  return (
    <>
      <Paragraph darkMode>Compare your code with the answer below:</Paragraph>

      <div className="mb-6">
        <CodeBlock
          filePath="app/routes/memberships.tsx"
          snippet={membershipCardComponentAnswer}
          showLineNumbers
          language="typescript"
        />
      </div>

      <Paragraph darkMode>
        Not only is this much cleaner to read, but the intention of the code is
        clearer.
      </Paragraph>
      <Paragraph darkMode>
        That said, it is common practice to move your custom components to their
        own folder, and use an <InlineMonoType darkMode>import</InlineMonoType>{" "}
        statement to bring them in where needed.
      </Paragraph>
      <Paragraph darkMode>
        Create a new subfolder folder inside your project's{" "}
        <InlineMonoType darkMode>app</InlineMonoType> folder called{" "}
        <InlineMonoType darkMode>components</InlineMonoType>:
      </Paragraph>

      <div className="mb-6">
        <Screenshot
          src={addComponentsFolder}
          alt="Add a components subfolder to your app folder"
        />
      </div>

      <Paragraph darkMode>
        Inside this new subfolder, create a new file called{" "}
        <InlineMonoType darkMode>MembershipCard.tsx</InlineMonoType>:
      </Paragraph>

      <div className="mb-6">
        <Screenshot
          src={createMembershipCardFile}
          alt="Create a MembershipCard.tsx file inside your new components subfolder"
        />
      </div>

      <Paragraph darkMode>
        Copy and paste the code below into your new file:
      </Paragraph>

      <CodeBlock
        snippet={membershipCardFileExportSnippet}
        filePath="app/components/MembershipCard.tsx"
      />

      <Paragraph darkMode>
        Finally, back inside{" "}
        <InlineMonoType darkMode>app/routes/memberships.tsx</InlineMonoType>,
        delete delete all the{" "}
        <InlineMonoType darkMode>MembershipCard</InlineMonoType> component code
        and replace it with a single{" "}
        <InlineMonoType darkMode>import</InlineMonoType> statement targeting
        your new external component file:
      </Paragraph>

      <div className="mb-6">
        <CodeBlock
          snippet={importMembershipCardSnippet}
          showLineNumbers
          filePath="app/routes/memberships.tsx"
          highlightAdditionalLines={[1]}
        />
      </div>

      <Paragraph darkMode>
        Congratulations! You've added your first route and imported a custom
        component into it. This is a useful pattern to remember for the future.
      </Paragraph>
    </>
  );
};

export default AddMembershipCardAnswer;
