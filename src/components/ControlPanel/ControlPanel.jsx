import { useState } from "react";
import "./controlPanel.css";

import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function ControlPanel() {
  const zoneMenu = ["01. ЗОНА №1", "02. ЗОНА №2", "03. ЗОНА №3"];
  const deviceMenu = ["01. ПРИСТРІЙ №1", "02. ПРИСТРІЙ №2", "03. ПРИСТРІЙ №3"];
  const groupMenu = ["01. ГРУПА №1", "02. ГРУПА №2", "03. ГРУПА №3"];
  const startMenu = ["01. ПРИСТРОЇ", "02. ЗОНИ", "03. ГРУПИ"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuItems, setMenuItems] = useState(startMenu);
  const [isStartMenu, setIsStartMenu] = useState(true);

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

  const handleOk = () => {
    if (isStartMenu === true) {
      switch (activeIndex) {
        case 0:
          setMenuItems(deviceMenu);
          setIsStartMenu(false);
          setActiveIndex(0);
          break;
        case 1:
          setMenuItems(zoneMenu);
          setIsStartMenu(false);
          setActiveIndex(0);
          break;
        case 2:
          setMenuItems(groupMenu);
          setIsStartMenu(false);
          setActiveIndex(0);
          break;
        default:
          console.log("Невідоме значення");
      }
    }
  };

  const handleLeft = () => {
    setMenuItems(startMenu);
    setIsStartMenu(true);
    setActiveIndex(0);
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
          <div>
            <button className="control_btn" onClick={handleUp} id="up">
              <FaLongArrowAltUp size={20} />
            </button>
          </div>
          <div className="central_row">
            <button className="control_btn" onClick={handleLeft} id="left">
              <FaLongArrowAltLeft size={20} />
            </button>
            <button className="control_btn" onClick={handleOk} id="ok">
              OK
            </button>
            <button className="control_btn" id="right">
              <FaLongArrowAltRight size={20} />
            </button>
          </div>

          <div>
            <button className="control_btn" onClick={handleDown} id="down">
              <FaLongArrowAltDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
