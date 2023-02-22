import {
  SandpackFiles,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackSetup,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";
import { SandpackTheme } from "@codesandbox/sandpack-themes/dist/types/types";
import LocalStorageCodeEditor from "./LocalStorageCodeEditor";
import ResetCodeBtn from "./ResetCodeBtn";
import SandpackForkBtn from "./SandpackForkBtn";

interface CodeSandboxProps {
  id?: string;
  customSetup?: SandpackSetup;
  template?:
    | "react-ts"
    | "react"
    | "vue"
    | "vanilla"
    | "vanilla-ts"
    | "vue3"
    | "vue3-ts"
    | "angular"
    | "svelte"
    | "solid"
    | "test-ts";
  theme?: SandpackTheme;
  title?: string;
  files: SandpackFiles;
  activeFile?: string;
  showTabs?: boolean;
}

const CodePlayground = ({
  customSetup,
  id,
  title = "Code Playground",
  template = "react-ts",
  theme = monokaiPro,
  files,
  showTabs = true,
}: CodeSandboxProps) => {
  const sandpackHeight = "36rem";

  return (
    <div className="py-6">
      <SandpackProvider
        options={{
          externalResources: ["https://cdn.tailwindcss.com"],
        }}
        template={template}
        files={files}
        customSetup={customSetup}
      >
        <SandpackThemeProvider theme={theme}>
          <SandpackLayout>
            <div className="flex min-w-full items-center justify-between overflow-hidden rounded-t-xl px-2 py-1">
              <span className="mx-2 text-xs font-bold uppercase text-neutral-400">
                {title}
              </span>
              <div className="flex">
                <ResetCodeBtn />
                <SandpackForkBtn />
              </div>
            </div>

            <div className="flex w-full">
              <LocalStorageCodeEditor id={id} showTabs={showTabs} />
              <SandpackPreview style={{ height: sandpackHeight }} />
            </div>
          </SandpackLayout>
        </SandpackThemeProvider>
      </SandpackProvider>
    </div>
  );
};

export default CodePlayground;
