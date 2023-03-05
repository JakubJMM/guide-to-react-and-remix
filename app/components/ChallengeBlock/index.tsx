import { Shield } from "react-feather";
import Heading from "../Heading";

interface ChallengeBlockProps {
  children: React.ReactNode;
  title?: string;
}

const ChallengeBlock = ({
  children,
  title = "Challenge",
}: ChallengeBlockProps) => {
  return (
    <div className="relative mb-6 mt-12 border-l-4 border-l-green-300 bg-green-900 py-8 px-10">
      <div className="absolute -top-10 -left-11 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-green-300">
          <Shield className="stroke-green-300" size="2.5rem" />
        </div>
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

export default ChallengeBlock;
