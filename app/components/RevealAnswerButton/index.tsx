import { Eye } from "react-feather";

interface RevealAnswerButtonProps {
  onClick: () => void;
}

const RevealAnswerButton = ({ onClick }: RevealAnswerButtonProps) => {
  return (
    <button
      type="button"
      className="group flex items-center text-xl uppercase leading-relaxed tracking-wide text-neutral-400 hover:text-neutral-100"
      onClick={onClick}
    >
      <Eye className="mr-4 stroke-neutral-400 group-hover:stroke-neutral-100" />{" "}
      Reveal
    </button>
  );
};

export default RevealAnswerButton;
