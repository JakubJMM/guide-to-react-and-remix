interface ParagraphProps {
  children: React.ReactNode;
  darkMode?: boolean;
  className?: string;
  challengeBlock?: boolean;
}

const Paragraph = ({
  children,
  className = "",
  darkMode = false,
  challengeBlock = false,
}: ParagraphProps) => {
  const generateClassList = () => {
    if (darkMode) {
      return "mb-6 text-2xl tracking-wide mx-auto max-w-4xl text-neutral-200";
    }

    if (challengeBlock) {
      return "mb-6 w-full text-2xl tracking-wide max-w-full text-neutral-200";
    }

    return "mb-6 text-lg tracking-wide text-gray-600 lg:text-2xl";
  };

  return <p className={`${generateClassList()} ${className}`}>{children}</p>;
};

export default Paragraph;
