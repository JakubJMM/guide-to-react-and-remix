import { ReactNode } from "react";

interface HeadingProps {
  isCentre?: boolean;
  children: ReactNode;
  className?: string;
  level: "h1" | "h2" | "h3";
}

const headingBaseStyles = "mb-12 leading-loose tracking-wide text-white";

const Heading = ({
  children,
  className = "",
  isCentre = false,
  level,
}: HeadingProps) => {
  switch (level) {
    case "h1":
      return (
        <h1
          className={`${headingBaseStyles} mt-14 ${
            isCentre ? "text-center" : "text-left"
          } text-4xl font-extrabold ${className}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${headingBaseStyles} mt-12 ${
            isCentre ? "text-center" : "text-left"
          } text-2xl font-bold ${className}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${headingBaseStyles} text-1xl mt-10 ${
            isCentre ? "text-center" : "text-left"
          } font-bold ${className}`}
        >
          {children}
        </h3>
      );
  }
};

export default Heading;
