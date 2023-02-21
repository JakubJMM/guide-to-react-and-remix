import Heading from "~/components/Heading";
import InlineMonoType from "~/components/InlineMonoType";
import Paragraph from "~/components/Paragraph";

const ConditionalRendering = () => {
  return (
    <>
      <Heading level="h2">Conditional Rendering</Heading>
      <Paragraph darkMode>
        First, lets add a <InlineMonoType darkMode>Link</InlineMonoType> button
        to the end of our <InlineMonoType darkMode>NavBar</InlineMonoType>:
      </Paragraph>

      <div className="mb-6"></div>
    </>
  );
};

export default ConditionalRendering;
