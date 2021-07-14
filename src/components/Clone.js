import React, { useState } from "react";
import LeftArea from "./LeftArea";
import ChatArea from "./ChatArea";
function Clone() {
  const [contact, setContact] = useState({});
  function pass(para) {
    setContact(para);
  }
  return (
    <div className="clone">
      <LeftArea pass={pass} />
      <ChatArea contact={contact} />
    </div>
  );
}

export default Clone;
