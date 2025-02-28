import React, { useEffect, useState } from "react";

const Keyboard = () => {
  const keyboardKeys = [
    { display: "Escape", pressed: "Escape", width: 12 },
    { display: "F1", pressed: "F1", width: 1 },
    { display: "F2", pressed: "F2", width: 1 },
    { display: "F3", pressed: "F3", width: 1 },
    { display: "F4", pressed: "F4", width: 1 },
    { display: "F5", pressed: "F5", width: 1 },
    { display: "F6", pressed: "F6", width: 1 },
    { display: "F7", pressed: "F7", width: 1 },
    { display: "F8", pressed: "F8", width: 1 },
    { display: "F9", pressed: "F9", width: 1 },
    { display: "F10", pressed: "F10", width: 1 },
    { display: "F11", pressed: "F11", width: 1 },
    { display: "F12", pressed: "F12", width: 1 },
    { display: "`", pressed: "`", width: 1 },
    { display: "1", pressed: "1", width: 1 },
    { display: "2", pressed: "2", width: 1 },
    { display: "3", pressed: "3", width: 1 },
    { display: "4", pressed: "4", width: 1 },
    { display: "5", pressed: "5", width: 1 },
    { display: "6", pressed: "6", width: 1 },
    { display: "7", pressed: "7", width: 1 },
    { display: "8", pressed: "8", width: 1 },
    { display: "9", pressed: "9", width: 1 },
    { display: "0", pressed: "0", width: 1 },
    { display: "-", pressed: "-", width: 1 },
    { display: "=", pressed: "=", width: 4 },
    { display: "Backspace", pressed: "Backspace", width: 4 },
    { display: "Tab", pressed: "Tab", width: 4 },
    { display: "Q", pressed: "q", width: 1 },
    { display: "W", pressed: "w", width: 1 },
    { display: "E", pressed: "e", width: 1 },
    { display: "R", pressed: "r", width: 1 },
    { display: "T", pressed: "t", width: 1 },
    { display: "Y", pressed: "y", width: 1 },
    { display: "U", pressed: "u", width: 1 },
    { display: "I", pressed: "i", width: 1 },
    { display: "O", pressed: "o", width: 1 },
    { display: "P", pressed: "p", width: 1 },
    { display: "[", pressed: "[", width: 1 },
    { display: "]", pressed: "]", width: 1 },
    { display: "\\", pressed: "\\", width: 6 },
    { display: "Caps Lock", pressed: "CapsLock", width: 6 },
    { display: "A", pressed: "a", width: 1 },
    { display: "S", pressed: "s", width: 1 },
    { display: "D", pressed: "d", width: 1 },
    { display: "F", pressed: "f", width: 1 },
    { display: "G", pressed: "g", width: 1 },
    { display: "H", pressed: "h", width: 1 },
    { display: "J", pressed: "j", width: 1 },
    { display: "K", pressed: "k", width: 1 },
    { display: "L", pressed: "l", width: 1 },
    { display: ";", pressed: ";", width: 1 },
    { display: "'", pressed: "'", width: 2 },
    { display: "Enter", pressed: "Enter", width: 6 },
    { display: "Shift", pressed: "Shift", width: 6 },
    { display: "Z", pressed: "z", width: 1 },
    { display: "X", pressed: "x", width: 1 },
    { display: "C", pressed: "c", width: 1 },
    { display: "V", pressed: "v", width: 1 },
    { display: "B", pressed: "b", width: 1 },
    { display: "N", pressed: "n", width: 1 },
    { display: "M", pressed: "m", width: 1 },
    { display: ",", pressed: ",", width: 1 },
    { display: ".", pressed: ".", width: 1 },
    { display: "/", pressed: "/", width: 1 },
    { display: "Control", pressed: "Control", width: 2 },
    { display: "Space", pressed: " ", width: 6 },
    { display: "Alt", pressed: "Alt", width: 6 },
    { display: "ArrowUp", pressed: "ArrowUp", width: 12 },
    { display: "ArrowLeft", pressed: "ArrowLeft", width: 4 },
    { display: "ArrowDown", pressed: "ArrowDown", width: 4 },
    { display: "ArrowRight", pressed: "ArrowRight", width: 4 },
  ];

  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    const handleKeyUp = (event) => {
      setPressedKey(event.key);
      setTimeout(() => setPressedKey(null), 500);
    };

    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="row h100 bgdeepu">
      <div className="col-12 text-center text-light pt-3">
        Press the keys of the keyboard to see the magic
      </div>
      {keyboardKeys.map((k) => {
        return (
          <div
            style={{
              backgroundColor: pressedKey === k.pressed ? "#e0fbfc" : "",
              color: pressedKey === k.pressed ? "black" : "red",
              fontSize: "xx-large",
              transition:
                "background-color 0.5s ease-in-out, color 0.1s ease-in-out",
            }}
            key={k.pressed}
            id={k.pressed}
            className={`col-${k.width} text-center buttons`}>
            {k.display}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
