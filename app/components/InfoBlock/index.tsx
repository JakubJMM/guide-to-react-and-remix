import { Info } from "react-feather";
import Heading from "../Heading";

interface InfoBlockProps {
  children: React.ReactNode;
  title?: string;
}

const InfoBlock = ({
  children,
  title = "More Information",
}: InfoBlockProps) => {
  return (
    <div className="relative mb-6 mt-12 border-l-4 border-l-purple-300 bg-purple-900 py-8 px-10">
      <div className="absolute -top-10 -left-11 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900">
        <Info className="stroke-purple-300" size="4rem" />
      </div>
      <Heading level="h2" className="mt-2 mb-6 text-4xl text-neutral-100">
        {title}
      </Heading>
      <div className="text-xl leading-relaxed tracking-wide text-neutral-100">
        {children}
      </div>
    </div>
  );
};

export default InfoBlock;
