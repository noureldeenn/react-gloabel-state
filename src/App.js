import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useMenue } from "./HookContexts";
import {
  ARABIC_LANG,
  ENGLISH_LANG,
  CLOSE_MENUE,
  OPEN_MANUE,
} from "./ActionTypes";
import { useLanguage } from "./LanguageContexts";
import { useUser } from "./UserContexts";

const options = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
];

function App() {
  const { state, dispatch } = useMenue();
  const { langaugeState, langaugeDispatch } = useLanguage();
  const { user } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() =>
          state.opened === false ? dispatch(OPEN_MANUE) : dispatch(CLOSE_MENUE)
        }
      >
        Click me
      </Button>
      {state.opened && (
        <>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ bgcolor: "background.paper" }}
          >
            <ListItem
              button
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                primary="When device is locked"
                secondary={options[selectedIndex]}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
      <Button
        variant="outlined"
        onClick={() =>
          langaugeState?.langauge === "ar"
            ? langaugeDispatch(ENGLISH_LANG)
            : langaugeDispatch(ARABIC_LANG)
        }
      >
        Click me
      </Button>
      <Typography variant="h5" component="h5">
        {langaugeState?.langauge}
      </Typography>
      <Typography variant="h5" component="h5">
        {user?.name}
      </Typography>
      <Typography variant="h5" component="h5">
        {user?.job}
      </Typography>
      <Typography variant="h5" component="h5">
        {user?.email}
      </Typography>
    </div>
  );
}
export default App;
