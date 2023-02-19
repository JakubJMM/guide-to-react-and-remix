import { SandpackFiles, useSandpack } from "@codesandbox/sandpack-react";
import { SkipBack } from "react-feather";
import Boop from "../Boop";

interface ResetCodeBtnProps {
  files: SandpackFiles;
}

const ResetCodeBtn = ({ files }: ResetCodeBtnProps) => {
  const { sandpack } = useSandpack();

  const revertCurrentFile = () => {
    sandpack.resetAllFiles();
  };

  return (
    <button
      title="Reset changes"
      type="button"
      className="mx-1"
      onClick={revertCurrentFile}
    >
      <Boop x={-2}>
        <SkipBack
          className={`h-auto w-4 stroke-neutral-400 shadow-sm hover:stroke-neutral-200 group-hover:stroke-neutral-200`}
        />
      </Boop>
    </button>
  );
};

export default ResetCodeBtn;
