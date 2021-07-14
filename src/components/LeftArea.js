import React, { useState } from "react";
import NewChatList from "./NewChatList.js";
import ChatList from "./ChatList.js";
import Profile from "./Profile";
import Header from "./Header";
import NewGrp from "./NewGrp";
import Settings from "./Settings";

function LeftArea(props) {
  // const [showHeader, setShowHeader] = useState(true);
  const [isClickedForNewChat, setClickForNewChat] = useState(false);
  const [isClickedForProfile, setClickForProfile] = useState(false);
  const [isClickedForNewGrp, setClickForNewGrp] = useState(false);
  const [isClickedForSettings, setClickForSettings] = useState(false);

  function pass(par) {
    props.pass(par);
  }
  function show() {
    if (isClickedForNewChat)
      return (
        <NewChatList
          isClickedForNewGrp={isClickedForNewGrp}
          setClickForNewGrp={setClickForNewGrp}
          isClickedForNewChat={isClickedForNewChat}
          setClickForNewChat={setClickForNewChat}
          pass={pass}
        />
      );
    else if (isClickedForProfile) return <Profile />;
    else if (isClickedForNewGrp) return <NewGrp pass={pass} />;
    else if (isClickedForSettings)
      return (
        <Settings
          isClickedSettings={isClickedForSettings}
          setClickForSettings={setClickForSettings}
          isClickedForProfile={isClickedForProfile}
          setClickForProfile={setClickForProfile}
        />
      );
  }
  return (
    <div>
      <Header
        // New Chat
        isClickedForNewChat={isClickedForNewChat}
        setClickForNewChat={setClickForNewChat}
        // Profile
        isClickedForProfile={isClickedForProfile}
        setClickForProfile={setClickForProfile}
        //New Group
        isClickedForNewGrp={isClickedForNewGrp}
        setClickForNewGrp={setClickForNewGrp}
        //Settings
        isClickedForSettings={isClickedForSettings}
        setClickForSettings={setClickForSettings}
      />
      <ChatList pass={pass} />
      {show()}
    </div>
  );
}

export default LeftArea;
