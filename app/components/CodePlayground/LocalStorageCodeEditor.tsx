import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { SandpackCodeEditor } from "@codesandbox/sandpack-react";
import useLocalStorageCode from "~/hooks/useLocalStorageCode";

interface LocalStorageCodeEditorProps {
  sandpackHeight?: string;
  showTabs: boolean;
}

const LocalStorageCodeEditor = ({
  sandpackHeight = "36rem",
  showTabs,
}: LocalStorageCodeEditorProps) => {
  useLocalStorageCode("membershipsPageCode");

  return (
    <SandpackCodeEditor
      style={{ height: sandpackHeight }}
      extensions={[autocompletion()]}
      extensionsKeymap={[completionKeymap]}
      showTabs={showTabs}
      showLineNumbers
      wrapContent
    />
  );
};

export default LocalStorageCodeEditor;
