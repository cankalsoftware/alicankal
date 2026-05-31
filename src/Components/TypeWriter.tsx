import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  children?: React.ReactNode;
  typing?: number;
}

const TypeWriter = ({ children, typing = 1 }: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const text = typeof children === "string" ? children : "";

  useEffect(() => {
    if (!text || typing !== 1) {
      setDisplayedText(text);
      return;
    }

    let currentIndex = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        // Character by character typewriter effect
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, typing]);

  return <span>{displayedText}</span>;
};

export default TypeWriter;
