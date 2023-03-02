import { ExternalLink as ExternalLinkIcon } from "react-feather";

interface ExternalLinkProps {
  className?: string;
  challengeBlock?: boolean;
  children: React.ReactNode;
  darkMode?: boolean;
  to: string;
}

const ExternalLink = ({
  className = "",
  challengeBlock = false,
  children,
  darkMode = false,
  to,
}: ExternalLinkProps) => {
  const generateClassList = () => {
    if (darkMode || challengeBlock) {
      return "inline-flex items-center text-2xl text-blue-500 no-underline hover:text-blue-300";
    }

    return "inline-flex items-center text-blue-500 no-underline hover:text-blue-700";
  };
  return (
    <a
      className={`${generateClassList()} ${className}`}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}{" "}
      <span className="ml-2">
        <ExternalLinkIcon />
      </span>
    </a>
  );
};

export default ExternalLink;
