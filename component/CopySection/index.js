import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";

import styles from "@/component/CopySection/index.module.css";

const CopySection = (props) => {
  const { roomId } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className={`${styles.copyContainer} ${copied ? styles.copied : ''}`}>
      <div className={styles.copyHeading}>Copy Room ID:</div>
      <hr />
      <div className={styles.copyDescription}>
        <span>{roomId}</span>
        <CopyToClipboard text={roomId} onCopy={handleCopy}>
          <Copy className="ml-3 cursor-pointer" />
        </CopyToClipboard>
      </div>
      {copied && <div className={styles.copiedMessage}>Copied!</div>}
    </div>
  );
};

export default CopySection;
