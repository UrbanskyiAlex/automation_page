import { useState } from "react";
import "./controlPanel.css";

import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

function ControlPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = ["01. Пристрої", "02. Зони", "03. Групи"];

  const handleUp = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : menuItems.length - 1
    );
  };

  const handleDown = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < menuItems.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="container">
      <div className="panelHolder">
        <div className="display">
          <ul className="display_list">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`list_item ${index === activeIndex ? "active" : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="btn_holder">
          <button className="control_btn" onClick={handleUp}>
            <FaLongArrowAltUp size={20} />
          </button>
          <button className="control_btn" onClick={handleDown}>
            <FaLongArrowAltDown size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
