import React from "react";
import DM from "./DM";

function ChatArea(props) {
  return (
    <div className="ChatArea">
      <DM contact={props.contact} />
    </div>
  );
}

export default ChatArea;
