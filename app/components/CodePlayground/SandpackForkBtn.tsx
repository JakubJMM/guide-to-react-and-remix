import { UnstyledOpenInCodeSandboxButton } from "@codesandbox/sandpack-react";
import { Codesandbox } from "react-feather";
import Boop from "../Boop";

const SandpackForkBtn = () => {
  return (
    <UnstyledOpenInCodeSandboxButton className="py-2">
      <Boop rotation={12} scale={1.1}>
        <Codesandbox
          className={`ml-2 stroke-neutral-400 shadow-sm group-hover:stroke-neutral-200`}
        />
      </Boop>
    </UnstyledOpenInCodeSandboxButton>
  );
};

export default SandpackForkBtn;
