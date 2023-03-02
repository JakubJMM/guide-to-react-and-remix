import {
  callUpdateUserMembershipsFromAction,
  updateUserMembershipSnippet,
} from "~/challengeComponents/remix/updatingDataSnippets/actionFunctions";
import CodeBlock from "~/components/CodeBlock";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";

interface UpdateUserMembershipProps {
  children: React.ReactNode;
}

const UpdateUserMembership = ({ children }: UpdateUserMembershipProps) => {
  return (
    <>
      <Heading level="h2" isCentre>
        Update User Membership
      </Heading>

      <Paragraph darkMode>
        Now that we are getting the{" "}
        <InlineMonoType darkMode>userId</InlineMonoType> and{" "}
        <InlineMonoType darkMode>membershipId</InlineMonoType> from our form
        into the backend <InlineMonoType darkMode>action</InlineMonoType>{" "}
        function, let's use these values to update the user's membership.
      </Paragraph>

      <Paragraph darkMode>
        Firstly, open{" "}
        <InlineMonoType darkMode>
          app/models/membership.server.ts
        </InlineMonoType>{" "}
        add the function below to the end of the file:
      </Paragraph>

      <div className="mb-6 px-6">
        <CodeBlock
          snippet={updateUserMembershipSnippet}
          showLineNumbers
          filePath="app/models/membership.server.ts"
        />
      </div>

      <div className="mx-auto mb-6 max-w-5xl px-6">
        <InfoBlock title="What is this function doing?">
          <Paragraph challengeBlock>
            This is a backend function that takes two arguments:{" "}
            <InlineMonoType challengeBlock>userId</InlineMonoType> and{" "}
            <InlineMonoType challengeBlock>membershipId</InlineMonoType>.
          </Paragraph>
          <Paragraph challengeBlock>
            Using <InlineMonoType challengeBlock>prisma</InlineMonoType> it
            grabs the <InlineMonoType challengeBlock>user</InlineMonoType> whose{" "}
            <InlineMonoType challengeBlock>id</InlineMonoType> matches the{" "}
            <InlineMonoType challengeBlock>userId</InlineMonoType> being passed
            in.
          </Paragraph>
          <Paragraph challengeBlock>
            It then updates this{" "}
            <InlineMonoType challengeBlock>user</InlineMonoType> with the{" "}
            <InlineMonoType challengeBlock>data</InlineMonoType> specified,
            namely the{" "}
            <InlineMonoType challengeBlock>membershipId</InlineMonoType> we have
            passed to it.
          </Paragraph>
        </InfoBlock>
      </div>

      <Paragraph darkMode>
        We now simply need to call this function from within the{" "}
        <InlineMonoType challengeBlock>action</InlineMonoType> function coded in
        the Memberships route file:
      </Paragraph>

      <div className="mb-6 px-6">
        <CodeBlock
          snippet={callUpdateUserMembershipsFromAction}
          showLineNumbers
          filePath="app/routes/memberships.tsx"
          hideCopyButton
          highlightAdditionalLines={[
            3, 6, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
          ]}
        />
      </div>

      <div className="mx-auto mb-6 max-w-5xl px-6">
        <InfoBlock title="What is invariant?">
          <Paragraph challengeBlock>
            <InlineMonoType challengeBlock>invariant</InlineMonoType> is an NPM
            package that helps to ensure type safety in your code. To read more
            about it, click{" "}
            <ExternalLink
              challengeBlock
              to="https://github.com/alexreardon/tiny-invariant#readme"
            >
              here.
            </ExternalLink>
          </Paragraph>
        </InfoBlock>
      </div>

      <Paragraph darkMode>
        Open up the <InlineMonoType darkMode>/memberships</InlineMonoType> route
        in your browser and click one of the membership cards to select it. If
        you refresh your browser page, the membership level selected will stay
        the same.
      </Paragraph>
      <Paragraph darkMode>
        Congratulations! The new membership level has saved to the database.
        Users can now manage their memberships from the website! 😀
      </Paragraph>
    </>
  );
};

export default UpdateUserMembership;
