interface ListItemProps {
  challengeBlock?: boolean;
  children: React.ReactNode;
  className?: string;
  darkMode?: boolean;
}

const ListItem = ({
  challengeBlock = false,
  children,
  className = "",
  darkMode = false,
}: ListItemProps) => {
  return (
    <li
      className={`mb-4 leading-relaxed tracking-wide last-of-type:mb-0 ${
        darkMode ? "text-white" : "text-gray-800"
      }
      ${
        challengeBlock ? "list-disc pl-4 text-2xl text-neutral-200" : "text-xl"
      } ${className}`}
    >
      {children}
    </li>
  );
};

export default ListItem;
