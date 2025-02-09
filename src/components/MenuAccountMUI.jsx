import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
 Info,
 User,
 SignOut 
} from "@phosphor-icons/react";
import Divider from "@mui/material/Divider";
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    //   children: `${name.split(' ')[0][0]}`,
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const MenuAccountMUI = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const hasThem = global.hasRoles("Admin");
  const hasPhanQuyen = global.hasRoles("UMS.R111");
  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePM = () => {
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, marginTop: 2 , color:"#ffffff"}}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {/* <Avatar {...stringAvatar(dataToken.FullName)} /> */}
            <User color="#ffffff"/>
          </IconButton>
        </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar fontSize="small"/>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span>NDCuong</span>
          </div>
        </MenuItem>

        {/* <Divider />
        <MenuItem onClick={{}}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Thông tin cá nhân
        </MenuItem>
        <MenuItem onClick={{}}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <Divider />

        <MenuItem onClick={handleClosePM}>
          <ListItemIcon>
            <SignOut size={24} />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <Info size={24} />
          </ListItemIcon>
            Version {" "} {window.myconfig.SPAVersion} 
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default MenuAccountMUI;