type InlineMonoTypeProps = {
  children: string;
  className?: string;
  darkMode?: boolean;
  challengeBlock?: boolean;
};

const InlineMonoType = ({
  darkMode = false,
  children,
  className = "",
  challengeBlock = false,
}: InlineMonoTypeProps) => {
  return (
    <span
      className={`rounded bg-slate-900 py-1 px-2 font-mono text-lg text-white ${
        darkMode ? "bg-neutral-700" : ""
      } ${challengeBlock ? "bg-neutral-900 bg-opacity-50" : ""} ${className}`}
    >
      {children}
    </span>
  );
};

export default InlineMonoType;
