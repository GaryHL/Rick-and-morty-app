import React, { useState, useEffect } from "react";
import { AiFillUpSquare, AiOutlineArrowUp } from "react-icons/ai";

function UpButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed right-0 bottom-8 mr-[10%] border text-white p-2 rounded-full animate-bounce
                 transition-transform transform-gpu hover:scale-110 active:scale-95 hover:bg-white hover:text-black`}
      style={{ display: showButton ? "block" : "none" }}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp className="text-2xl" />
    </button>
  );
}

export default UpButton;
