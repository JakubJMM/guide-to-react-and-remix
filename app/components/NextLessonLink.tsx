import { ArrowRightCircle } from "react-feather";
import InternalStyledLink from "./InternalStyledLink";

interface NextLessonLinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

const NextLessonLink = ({
  children,
  className = "",
  to,
}: NextLessonLinkProps) => {
  return (
    <InternalStyledLink
      to={to}
      className={`group flex items-center justify-end text-2xl ${className}`}
      darkMode
    >
      {children}
      <ArrowRightCircle className="ml-4 group-hover:stroke-blue-400" />
    </InternalStyledLink>
  );
};

export default NextLessonLink;
