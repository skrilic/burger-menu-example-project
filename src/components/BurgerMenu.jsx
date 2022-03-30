import { useState, useContext } from "react";

// import { fallDown as Burger, SubMenu, Item } from "burger-menu";
import { slide as Burger, SubMenu, Item } from "burger-menu";
import BurgerSettingsContext from "../contexts/BurgerSettingsContext";

import "burger-menu/lib/index.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TocIcon from "@mui/icons-material/Toc";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const { getSavedValue } = useContext(BurgerSettingsContext);
  const isLeft = getSavedValue("isLeft", false);
  const width = getSavedValue("width", 300);

  const muiStyles = {
    largeIcon: {
      width: 30,
      height: 30,
    },
    
    mediumIcon: {
      width: 20,
      height: 20,
    },

    smallIcon: {
      width: 16,
      height: 16,
    },
  };

  return (
    <div>

        {!isLeft ? (
          <div className="burger-menu-icon-left" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon style={muiStyles.largeIcon} />
          </div>
        ) : (
          <div className="burger-menu-icon-right" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon style={muiStyles.largeIcon} />
          </div>
        )}

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
        <Item icon={<TocIcon style={muiStyles.smallIcon}/>} itemKey={"content"} text={"Content"}/>
        <SubMenu icon={<SearchIcon style={muiStyles.smallIcon} />} title="Search">
          <Item itemKey={"searchA"} text={"by term"}/>
          <Item itemKey={"searchB"} text={"by category"}/>
        </SubMenu>
        <Item
          icon={<SettingsIcon style={muiStyles.smallIcon}/>}
          itemKey={"settings"}
          text={"Settings"}
          />
        <Item icon={<InfoIcon style={muiStyles.smallIcon}/>} itemKey={"about"} text={"About"}/>
      </Burger>
    </div>
  );
}

export default BurgerMenu;
