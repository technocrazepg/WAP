import React, { useState } from "react";
import ppic from "./images/ppic.png";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import BlockIcon from "@material-ui/icons/Block";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import HelpIcon from "@material-ui/icons/Help";

function Settings(props) {
  function showProfile() {
    props.setClickForSettings(false);
    props.setClickForProfile(true);
  }
  return (
    <div className="Settings">
      <div className="nameDisplay" onClick={showProfile}>
        <img src={ppic} alt="" />
        <div style={{ margin: "auto" }}>
          Pranav
          <br />
          <span style={{ color: "gray" }}>Hey there! I'm using WhatsApp.</span>
        </div>
      </div>
      <table className="Setting_options">
        <tr>
          <td className="icon">
            <NotificationsIcon fontSize="small" />
          </td>
          <td className="option">Notifications</td>
        </tr>
        <tr>
          <td className="icon">
            <Brightness6Icon fontSize="small" />
          </td>
          <td className="option">Theme</td>
        </tr>
        <tr>
          <td className="icon">
            <WallpaperIcon fontSize="small" />
          </td>
          <td className="option">Chat Wallpaper</td>
        </tr>
        <tr>
          <td className="icon">
            <BlockIcon fontSize="small" />
          </td>
          <td className="option">Blocked</td>
        </tr>
        <tr>
          <td className="icon">
            <KeyboardIcon fontSize="small" />
          </td>
          <td className="option">Keyboard Shortcuts</td>
        </tr>
        <tr>
          <td className="icon">
            <HelpIcon fontSize="small" />
          </td>
          <td className="option">Help</td>
        </tr>
      </table>
    </div>
  );
}

export default Settings;
