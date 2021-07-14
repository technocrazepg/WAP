import React, { useState, useEffect, useRef } from "react";
import profilePic from "./images/ppic.png";
import DonutLargeRoundedIcon from "@material-ui/icons/DonutLargeRounded";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import OtherHeader from "./OtherHeader.js";
function Header(props) {
  const [isClickedForSearch, setClickForSearch] = useState(false);
  const [isClickedForMenu, setClickForMenu] = useState(false);
  const [isClickedForOther, setClickForOther] = useState(false);
  function showSearchIcon() {
    setClickForSearch((prevValue) => {
      return !prevValue;
    });
  }
  function chngIcon() {
    setClickForSearch(true);
  }
  function showMenu(event) {
    event.preventDefault();
    setClickForMenu(
      (prevValue) => {
        return !prevValue;
      },
      () => {
        document.addEventListener("click", closeMenu);
      }
    );
  }
  // var property = document.getElementById("menuBtn");
  // isClickedForMenu
  //   ? (property.style.backgroundColor = "rgb(207, 207, 207)")
  //   : (property.style.backgroundColor = "transparent");
  function closeMenu() {
    setClickForMenu(false, () => {
      document.removeEventListener("click", closeMenu);
    });
  }
  function showNewChat() {
    props.setClickForNewChat(true);
    setClickForOther(true);
    setClickForMenu(false);
  }
  function showProfile() {
    props.setClickForProfile(true);
    setClickForOther(true);
    setClickForMenu(false);
  }
  function showNewGrpList() {
    props.setClickForNewGrp(true);
    setClickForOther(true);
    setClickForMenu(false);
  }
  function showSettings() {
    props.setClickForSettings(true);
    setClickForOther(true);
    setClickForMenu(false);
  }
  function useOutsideAlerter(ref) {
    useEffect(() => {
      // Function for click event
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setClickForMenu(false);
        }
      }
      // Adding click event listener
      document.addEventListener("click", handleOutsideClick);
    }, [ref]);
  }
  const box = useRef(null);
  useOutsideAlerter(box);
  return (
    <div>
      {!isClickedForOther ? (
        <div className="Header">
          <img src={profilePic} onClick={showProfile} alt="Profile pic"></img>
          <button onClick={showMenu} id="menuBtn" ref={box}>
            <MoreVertIcon fontSize="small" />
          </button>
          <button onClick={showNewChat}>
            <ChatIcon fontSize="small" />
          </button>
          <button>
            <DonutLargeRoundedIcon fontSize="small" />
          </button>
          {isClickedForMenu ? (
            <div className="menu">
              <ul>
                <li onClick={showNewGrpList}>New Group</li>
                <li>Create Room</li>
                <li onClick={showProfile}>Profile</li>
                <li>Archived</li>
                <li>Starred</li>
                <li onClick={showSettings}>Settings</li>
                <li>Log Out</li>
              </ul>
            </div>
          ) : null}
          <div className="searchBox">
            {!isClickedForSearch ? (
              <SearchIcon className="searchIcon" />
            ) : (
              <ArrowBackIcon className="backIcon" onClick={showSearchIcon} />
            )}
            <input
              placeholder="Search or start new chat"
              onClick={chngIcon}
            ></input>
          </div>
        </div>
      ) : (
        <OtherHeader
          setClickForOther={setClickForOther}
          //New Chat
          isClickedForNewChat={props.isClickedForNewChat}
          setClickForNewChat={props.setClickForNewChat}
          //Profile
          isClickedForProfile={props.isClickedForProfile}
          setClickForProfile={props.setClickForProfile}
          //NewGrp
          isClickedForNewGrp={props.isClickedForNewGrp}
          setClickForNewGrp={props.setClickForNewGrp}
          //Settings
          isClickedForSettings={props.isClickedForSettings}
          setClickForSettings={props.setClickForSettings}
        />
      )}
    </div>
  );
}

export default Header;
