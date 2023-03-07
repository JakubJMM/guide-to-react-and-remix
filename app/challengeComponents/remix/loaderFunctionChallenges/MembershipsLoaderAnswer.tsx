import { displayMembershipData } from "~/assets/codeSnippets/loadingData/displayMembershipData";
import CodeBlock from "~/components/CodeBlock";
import Heading from "~/components/Heading";
import InfoBlock from "~/components/InfoBlock";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";

const MembershipsLoaderAnswer = () => {
  return (
    <>
      <Heading level="h2" isCentre>
        Memberships Loader Answer{" "}
      </Heading>
      <Paragraph darkMode>Compare the code below with your solution:</Paragraph>

      <div className="mx-auto mb-6 max-w-5xl px-6">
        <CodeBlock
          snippet={displayMembershipData}
          showLineNumbers
          filePath="app/routes/memberships.tsx"
          highlightAdditionalLines={[22, 23, 24, 25, 26, 27, 28, 29]}
        />
      </div>

      <InfoBlock title="What is happening here?">
        <Paragraph challengeBlock>
          Remember that <InlineMonoType challengeBlock>map</InlineMonoType>
          simply returns a new array.
        </Paragraph>
        <Paragraph challengeBlock>
          Each item in the new array is created by the function you pass into{" "}
          <InlineMonoType challengeBlock>map</InlineMonoType>, and this function
          does something to every item in the original.
        </Paragraph>
        <Paragraph challengeBlock>
          So in this example, the first item of the{" "}
          <InlineMonoType challengeBlock>memberships</InlineMonoType> array gets
          passed into the function, and the function returns a JSX element with
          that particular membership's{" "}
          <InlineMonoType challengeBlock>level</InlineMonoType>,{" "}
          <InlineMonoType challengeBlock>description</InlineMonoType> and{" "}
          <InlineMonoType challengeBlock>price</InlineMonoType>. Then the second
          membership item gets passed into the function, which in turn returns a
          second JSX element containing different data, and so on.
        </Paragraph>
      </InfoBlock>

      <Paragraph darkMode>
        This technique makes it easy to load data into a Remix route and display
        it to a user.
      </Paragraph>
      <Paragraph darkMode>
        In our next lesson, we will allow users to update their membership level
        from the options provided.
      </Paragraph>
    </>
  );
};

export default MembershipsLoaderAnswer;
