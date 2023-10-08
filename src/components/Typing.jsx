import React, { useEffect, useRef, useState } from "react";

const TypingAnimation = () => {
  const currentIndexRef = useRef(0);
  const textRef = useRef("");
  const [text, setText] = useState("");
  const companyNames = [
    "IITMa",
    "IITDe",
    "IITBo",
    "IITKGP.",
    "IITKa",
    "IITRo",
    "IISc.",
    "NITT.",
    "VITs",
    "BITSs",
    "NITSs",
    "DTUs",
    "NITWs",
    "NITRKLs",
    "NITCs",
    "IITGs",
    "NITDGPs",
    "NITPs",
    "IITHs",
  ];

  useEffect(() => {
    const typeText = () => {
      if (currentIndexRef.current < companyNames.length) {
        const companyName = companyNames[currentIndexRef.current];
        textRef.current = companyName.substring(0, textRef.current.length + 1);
        setText(textRef.current);
        if (textRef.current === companyName) {
          textRef.current = "";
          setText("");
          setTimeout(() => {
            currentIndexRef.current++;

            setTimeout(typeText, 500); // Adjust typing speed between company names
          }, 1000); // Adjust delay before typing the next company name
        } else {
          setTimeout(typeText, 300); // Adjust typing speed for individual characters
        }
      } else {
        // Animation is complete, reset and start again from the beginning
        currentIndexRef.current = 0;
        textRef.current = "";
        setText("");
        setTimeout(typeText, 2000); // Adjust the delay before restarting the animation
      }
    };

    typeText();
  }, []);

  return (
    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-100 via-red-300 to-yellow-300 bg-clip-text text-transparent sm:text-5xl">
      Companies in {text}
    </h1>
  );
};

export default TypingAnimation;
