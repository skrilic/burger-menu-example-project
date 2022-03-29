import { useState, useContext } from "react";

// import { fallDown as Burger, SubMenu, Item } from "burger-menu";
import { slide as Burger, SubMenu, Item } from "burger-menu";
import SettingsContext from "../AppContext";

import "burger-menu/lib/index.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TocIcon from "@mui/icons-material/Toc";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLeft, setIsLeft] = useState(true);
  // const [width, setWidth] = useState(300);
  const { handlePosition, isLeft, handleWidth, width } = useContext(
    SettingsContext
  );

  handlePosition("left"); // "left" or "right"
  handleWidth(200);

  return (
    <div className="burger-menu">
      <div onClick={() => setIsOpen(!isOpen)}>
        {!isLeft ? (
          <span className="burger-menu-icon-left">
            <MenuIcon />
          </span>
        ) : (
          <span className="burger-menu-icon-right">
            <MenuIcon />
          </span>
        )}
      </div>
      <Burger
        className="burger-menu"
        isOpen={isOpen}
        onClick={(event) => {
          const { itemKey } = event;
          window.location = `/${itemKey}`;
        }}
        width={width}
        selectedKey={"content"}
        onClose={() => setIsOpen(false)}
        left={isLeft}
      >
        <Item icon={<TocIcon />} itemKey={"content"} text={"Content"}></Item>
        <SubMenu icon={<SearchIcon />} title="Search">
          <Item itemKey={"searchA"} text={"by term"}></Item>
          <Item itemKey={"searchB"} text={"by category"}></Item>
        </SubMenu>
        <Item
          icon={<SettingsIcon />}
          itemKey={"settings"}
          text={"Settings"}
        ></Item>
        <Item icon={<InfoIcon />} itemKey={"about"} text={"About"}></Item>
      </Burger>
    </div>
  );
}

export default BurgerMenu;
