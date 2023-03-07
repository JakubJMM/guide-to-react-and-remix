import styles from "node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-dark.js";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Copy } from "react-feather";
import SyntaxHighlighter from "react-syntax-highlighter";

interface CodeBlockProps {
  filePath?: string;
  language?: string;
  showLineNumbers?: boolean;
  snippet: string;
  hideCopyButton?: boolean;
  highlightAdditionalLines?: number[];
  highlightSubtractedLines?: number[];
  highlightInfoLines?: number[];
}

const CodeBlock = ({
  filePath,
  language = "javascript",
  showLineNumbers,
  snippet,
  hideCopyButton = false,
  highlightAdditionalLines,
  highlightSubtractedLines,
  highlightInfoLines,
}: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  const handleCopy = () => {
    setIsCopied(true);
  };

  return (
    <div className="relative">
      {filePath ? (
        <div className="mb-2 text-right font-mono text-xs text-neutral-400">
          {filePath}
        </div>
      ) : null}
      {isCopied ? (
        <span
          className={`absolute right-1 bg-neutral-900 bg-opacity-90 px-2 py-1 text-xs uppercase text-neutral-400 ${
            filePath ? "top-7" : "top-2"
          }`}
        >
          Copied!
        </span>
      ) : (
        <>
          {hideCopyButton ? null : (
            <CopyToClipboard text={snippet} onCopy={handleCopy}>
              <span
                className={`group absolute right-1 z-10 cursor-pointer rounded bg-neutral-900 bg-opacity-90 p-2 hover:bg-neutral-500 hover:bg-opacity-90
             ${filePath ? "top-7" : "top-1"}`}
              >
                <Copy
                  type="button"
                  className={`stroke-neutral-400 group-hover:stroke-neutral-800`}
                  onClick={handleCopy}
                />
              </span>
            </CopyToClipboard>
          )}
        </>
      )}
      <SyntaxHighlighter
        language={language}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        style={styles}
        lineProps={(lineNumber: number): React.HTMLProps<HTMLElement> => {
          const style: React.CSSProperties = {
            display: "block",
            width: "100%",
          };

          if (highlightAdditionalLines && highlightAdditionalLines.length > 0) {
            highlightAdditionalLines.forEach((highlightLineNumber) => {
              if (highlightLineNumber === lineNumber) {
                style.backgroundColor = "rgba(6, 78, 59, 0.5)";
                style.borderLeft = "4px solid rgb(34 197 94)";
                style.position = "relative";
                style.left = "-4px";
              }

              return { style };
            });
          }
          if (highlightSubtractedLines && highlightSubtractedLines.length > 0) {
            highlightSubtractedLines.forEach((highlightLineNumber) => {
              if (highlightLineNumber === lineNumber) {
                style.backgroundColor = "rgba(127, 29, 29, 0.5)";
                style.borderLeft = "4px solid rgb(239 68 68)";
                style.position = "relative";
                style.left = "-4px";
              }

              return { style };
            });
          }
          if (highlightInfoLines && highlightInfoLines.length > 0) {
            highlightInfoLines.forEach((highlightLineNumber) => {
              if (highlightLineNumber === lineNumber) {
                style.backgroundColor = "rgba(76, 29, 149, 0.5)";
                style.borderLeft = "4px solid rgb(124, 58, 237)";
                style.position = "relative";
                style.left = "-4px";
              }

              return { style };
            });
          }

          return { style };
        }}
      >
        {snippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
