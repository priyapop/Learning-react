import { useState } from "react";

import "./index.css";
export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const Onoff = isOn ? "on" : "off";

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <div
        className="parent"
        style={{ backgroundColor: isOn ? "#4caf50" : "" }}
        onClick={handleToggleSwitch}
      >
        <div className={`circle ${Onoff}`}>
          <span className="txt">{Onoff}</span>
        </div>
      </div>
    </>
  );
};
