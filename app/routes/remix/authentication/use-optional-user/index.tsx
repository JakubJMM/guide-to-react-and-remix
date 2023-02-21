import { navbarStarterCodeSnippet } from "~/assets/codeSnippets/authentication/useOptionalUserSnippets";
import CodeBlock from "~/components/CodeBlock";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";

const UseOptionalUser = () => {
  return (
    <>
      <Heading isCentre level="h2">
        Use Optional User
      </Heading>
      <Paragraph darkMode>
        There are many times where we want to show a page to every user, but
        adjust its content depending on whether they are logged in or not.
      </Paragraph>
      <Paragraph darkMode>
        For example, we might have a button that says 'Log in' if the user is
        logged out, or 'Log out' if they are logged in.
      </Paragraph>
      <Paragraph darkMode>
        The Indie Stack provides a useful React{" "}
        <ExternalLink to="https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks">
          hook
        </ExternalLink>{" "}
        that allows you to do just this.
      </Paragraph>
      <Paragraph darkMode>
        Inside this project you will find a Navbar component at{" "}
        <InlineMonoType darkMode>
          app/components/Navbar/index.tsx
        </InlineMonoType>{" "}
        which displays the navigation bar at the top of every screen:
      </Paragraph>

      <div className="my-6">
        <CodeBlock
          snippet={navbarStarterCodeSnippet}
          filePath="app/components/Navbar/index.tsx"
          showLineNumbers
        />
      </div>
    </>
  );
};

export default UseOptionalUser;
