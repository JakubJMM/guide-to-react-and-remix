import {
  SandpackFiles,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";
import { SandpackTheme } from "@codesandbox/sandpack-themes/dist/types/types";
import LocalStorageCodeEditor from "./LocalStorageCodeEditor";
import ResetCodeBtn from "./ResetCodeBtn";
import SandpackForkBtn from "./SandpackForkBtn";

interface CodeSandboxProps {
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
  // files: Record<string, string | Record<string, string | boolean> | boolean>;
  files: SandpackFiles;
  activeFile?: string;
  showTabs?: boolean;
}

const CodePlayground = ({
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
          externalResources: [
            "https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css",
          ],
        }}
        template={template}
        files={files}
      >
        <SandpackThemeProvider theme={theme}>
          <SandpackLayout>
            <div>
              <div className="flex items-center justify-between overflow-hidden rounded-t-xl px-2 py-1">
                <span className="mx-2 text-xs font-bold uppercase text-neutral-400">
                  {title}
                </span>
                <div className="flex">
                  <ResetCodeBtn files={files} />
                  <SandpackForkBtn />
                </div>
              </div>

              <div className="flex">
                <LocalStorageCodeEditor showTabs={showTabs} />
                <SandpackPreview style={{ height: sandpackHeight }} />
              </div>
            </div>
          </SandpackLayout>
        </SandpackThemeProvider>
      </SandpackProvider>
    </div>
  );
};

export default CodePlayground;
