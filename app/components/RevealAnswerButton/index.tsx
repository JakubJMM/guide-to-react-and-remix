import { Eye } from "react-feather";

interface RevealAnswerButtonProps {
  onClick: () => void;
}

const RevealAnswerButton = ({ onClick }: RevealAnswerButtonProps) => {
  return (
    <button
      type="button"
      className="group mb-6 flex w-full items-center justify-center text-3xl uppercase leading-relaxed tracking-wide text-purple-400 transition-all hover:scale-110 hover:text-purple-100"
      onClick={onClick}
    >
      <Eye
        className="mr-4 stroke-purple-400 group-hover:stroke-purple-100"
        size={"2rem"}
      />{" "}
      Reveal
    </button>
  );
};

export default RevealAnswerButton;
