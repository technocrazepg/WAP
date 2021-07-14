import React from "react";
import ChatListContacts from "./ChatListContacts.js";

function ChatList(props) {
  return (
    <div className="ChatList">
      <ul>
        {ChatListContacts.map((contact, index) => (
          <div>
            <li
              onClick={() => {
                props.pass(contact);
              }}
            >
              <img src={contact.dp} alt="Contact Display Pic" />
              <span className="contactName">{contact.name}</span>
              <span className="contactTime" style={{ color: "gray" }}>
                time
              </span>
              <br></br>
              <span style={{ color: "gray" }}>{contact.msg}</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
