import { ExternalLink as ExternalLinkIcon } from "react-feather";

interface ExternalLinkProps {
  challengeBlock?: boolean;
  children: React.ReactNode;
  to: string;
}

const ExternalLink = ({
  challengeBlock = false,
  children,
  to,
}: ExternalLinkProps) => {
  return (
    <a
      className={`inline-flex items-center text-blue-500 underline no-underline ${
        challengeBlock ? "hover:text-blue-300" : "hover:text-blue-700"
      }`}
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
