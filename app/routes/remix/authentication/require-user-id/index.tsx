import { basicUserIdLoader } from "~/assets/codeSnippets/authentication/basicUserIdLoader";
import loginScreen from "~/assets/jpg/login-screen.jpg";
import CodeBlock from "~/components/CodeBlock";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import InternalStyledLink from "~/components/InternalStyledLink";
import NextLessonLink from "~/components/NextLessonLink";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";

const RequireUserId = () => {
  return (
    <>
      <Heading isCentre level="h2">
        Require User Id
      </Heading>
      <Paragraph darkMode>
        Authentication is the process of checking that a user is who they say
        they are. This is commonly done by requiring a username and password
        before they can see a particular page.
      </Paragraph>
      <Paragraph darkMode>
        The Remix Indie Stack has authentication included. All we have to do as
        coders is decide which page(s) we want users to be signed in to see.
      </Paragraph>
      <Paragraph darkMode>
        One such route might be the{" "}
        <InlineMonoType darkMode>/memberships</InlineMonoType> page that we set
        up in a{" "}
        <InternalStyledLink
          className="text-xl"
          to="/remix/routing-in-remix/adding-a-new-page/add-a-route-file"
        >
          previous lesson
        </InternalStyledLink>
        .
      </Paragraph>
      <Paragraph darkMode>
        This is really easy with the Indie Stack. Just add a{" "}
        <InlineMonoType darkMode>loader</InlineMonoType> function like the one
        below to your{" "}
        <InlineMonoType darkMode>app/routes/memberships.tsx</InlineMonoType>{" "}
        file:
      </Paragraph>

      <div className="mb-6">
        <CodeBlock
          snippet={basicUserIdLoader}
          filePath="app/routes/memberships.tsx"
          showLineNumbers
          highlightAdditionalLines={[1, 3, 4, 5, 6, 7, 8, 9]}
        />
      </div>

      <Paragraph darkMode>
        Behind the scenes, this is checking the browser's session data to see
        whether a <InlineMonoType darkMode>userId</InlineMonoType> is stored
        there.
      </Paragraph>
      <Paragraph darkMode>
        If there is, the user can open the page and continue. If not, they are
        redirected to the <InlineMonoType darkMode>/login</InlineMonoType> route
        to input their email and password.
      </Paragraph>
      <Paragraph darkMode>
        Try it yourself! After adding the code above to{" "}
        <InlineMonoType darkMode>app/routes/memberships.tsx</InlineMonoType>,
        visit{" "}
        <ExternalLink to="http://localhost:3000/memberships">
          http://localhost:3000/memberships
        </ExternalLink>{" "}
        and if you are not already signed in, you'll see the login screen below:
      </Paragraph>

      <div className="mb-6">
        <Screenshot
          src={loginScreen}
          alt="The Remix Indie Stack login screen"
        />
      </div>

      <Paragraph darkMode>
        Great! So if you want a user to be signed in before they can access a
        particular route, just add the code above to it.
      </Paragraph>
      <Paragraph darkMode>
        Next, let's see how we can handle pages that are open to everyone, but
        on which the content changes depending whether users are logged in or
        not.
      </Paragraph>
      <NextLessonLink to="/remix/authentication/use-optional-user">
        Next: Use optional user
      </NextLessonLink>
    </>
  );
};

export default RequireUserId;
