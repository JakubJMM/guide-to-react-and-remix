import { Link } from "@remix-run/react";
import type { ReactNode } from "react";

type InternalStyledLinkProps = {
  challengeBlock?: boolean;
  children: ReactNode;
  className?: string;
  darkMode?: boolean;
  to: string;
};

const InternalStyledLink = ({
  challengeBlock = false,
  children,
  className = "",
  darkMode = false,
  to,
}: InternalStyledLinkProps) => {
  return (
    <Link
      to={to}
      type="button"
      className={`text-lg tracking-wide text-blue-500 no-underline transition-colors ${
        darkMode ? "hover:text-blue-400" : "hover:text-blue-700"
      } ${
        challengeBlock ? "hover:text-blue-200" : "hover:text-blue-700"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default InternalStyledLink;
