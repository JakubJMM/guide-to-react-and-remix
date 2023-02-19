interface ParagraphProps {
  children: React.ReactNode;
  darkMode?: boolean;
  className?: string;
}

const Paragraph = ({
  children,
  className = "",
  darkMode = false,
}: ParagraphProps) => {
  return (
    <p
      className={`mb-6 text-lg tracking-wide text-gray-600 lg:text-2xl ${
        darkMode ? "mx-auto max-w-4xl text-neutral-200" : ""
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
