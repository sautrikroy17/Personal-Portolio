import { useEffect, useState } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export default function ScrambleText({ text, className }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    const scramble = () => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (text[index] === " ") return " ";
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    };

    // Delay start slightly to wait for preloader
    setTimeout(() => {
      interval = setInterval(scramble, 30);
    }, 2500);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText || text.replace(/./g, "\u00A0")}</span>;
}
