import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { SandpackCodeEditor } from "@codesandbox/sandpack-react";
import useLocalStorageCode from "~/hooks/useLocalStorageCode";

interface LocalStorageCodeEditorProps {
  id?: string;
  sandpackHeight?: string;
  showTabs: boolean;
}

const LocalStorageCodeEditor = ({
  id,
  sandpackHeight = "36rem",
  showTabs,
}: LocalStorageCodeEditorProps) => {
  if (id) {
    useLocalStorageCode(id);
  }

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
