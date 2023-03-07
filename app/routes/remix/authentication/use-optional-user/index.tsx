import { addUseOptionalUserToNavbar } from "~/assets/codeSnippets/authentication/useOptionalUserSnippets";
import optionalUserConsoleLogSignedIn from "~/assets/optional-user-console-log-signed-in.png";
import optionalUserConsoleLogUndefined from "~/assets/optional-user-console-log-undefined.png";
import CodeBlock from "~/components/CodeBlock";
import ExternalLink from "~/components/ExternalLink";
import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import NextLessonLink from "~/components/NextLessonLink";
import Paragraph from "~/components/Paragraph";
import Screenshot from "~/components/Screenshot";

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
        that allows you to do just this. Let's use it now.
      </Paragraph>

      <Heading isCentre level="h2">
        Updating the Navbar
      </Heading>
      <Paragraph darkMode>
        You should have a Navbar component in your project at{" "}
        <InlineMonoType darkMode>
          app/components/Navbar/index.tsx
        </InlineMonoType>
        . This code is responsible for displaying the navigation bar at the top
        of every screen.
      </Paragraph>
      <Paragraph darkMode>
        Let's add the{" "}
        <InlineMonoType darkMode>useOptionalUser()</InlineMonoType> hook into
        the <InlineMonoType darkMode>Navbar</InlineMonoType> component:
      </Paragraph>

      <div className="mb-6">
        <CodeBlock
          snippet={addUseOptionalUserToNavbar}
          showLineNumbers
          filePath="app/components/Navbar/index.tsx"
          highlightAdditionalLines={[1, 6, 7]}
          hideCopyButton
        />
      </div>

      <Paragraph darkMode>
        The <InlineMonoType darkMode>useOptionalUser()</InlineMonoType> hook
        returns one of two things. If the user is logged in, it will return an
        object with details of their id and email.
      </Paragraph>
      <Paragraph darkMode>
        If no user is signed in,{" "}
        <InlineMonoType darkMode>useOptionalUser()</InlineMonoType> will
        returned <InlineMonoType darkMode>undefined</InlineMonoType>.
      </Paragraph>
      <Paragraph darkMode>
        Head over to Chrome and{" "}
        <ExternalLink to="https://developer.chrome.com/docs/devtools/open/#chrome-menu">
          open the DevTools JavaScript console
        </ExternalLink>
        .
      </Paragraph>

      <div className="mb-6">
        <Screenshot
          src={optionalUserConsoleLogSignedIn}
          alt="User object logged to console when signed in"
        />
      </div>

      <Paragraph darkMode>
        If you are already logged in, you will see the{" "}
        <InlineMonoType darkMode>user</InlineMonoType> object in the console at
        the bottom of your window.
      </Paragraph>
      <Paragraph darkMode>
        If you are not logged in, the{" "}
        <InlineMonoType darkMode>user</InlineMonoType> will show as{" "}
        <InlineMonoType darkMode>undefined</InlineMonoType>:
      </Paragraph>

      <div className="mb-6">
        <Screenshot
          src={optionalUserConsoleLogUndefined}
          alt="User object is undefined when signed out"
        />
      </div>

      <Paragraph darkMode>
        In the next lesson, we will render a 'Login' or 'Logout' button
        depending on whether a user is found.
      </Paragraph>

      <NextLessonLink to="/remix/authentication/conditional-rendering">
        Conditionally render content when signed in
      </NextLessonLink>
    </>
  );
};

export default UseOptionalUser;
