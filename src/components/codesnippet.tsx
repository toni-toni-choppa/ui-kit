import styles from "./codesnippet.module.css";
import { useState } from "react";
import Button from "./buttons";

function CodeSnippet({ language, code }: { language: string, code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className={styles.codeSnippet}>
      <div className={styles.snippetHeader}>
        <span>{language}</span>
        <Button label={copied ? "Copied!" : "Copy"} onClick={async () => {
          try {
            await navigator.clipboard.writeText(code);

            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 2000);
          } catch (err) {
            console.error("[ERROR] Failed to copy code to clipboard, the following error was returned: ", err);
          }
        }} size="small" variant="transparent"/>
      </div>
      <pre>
        <code>
          {code}
        </code>
      </pre>
    </div>
  );
}

export default CodeSnippet;