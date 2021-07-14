import React from "react";
import contacts from "./Contacts";
function NewGrp(props) {
  const sortedContacts = contacts;
  sortedContacts.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();
    if (fa > fb) return 1;
    if (fa < fb) return -1;
    return 0;
  });

  // document.getElementById("inputBox").current.focus();

  return (
    <div className="NewChatList ChatList">
      <div className=""></div>
      <div className="">
        <ul>
          <li style={{ cursor: "auto" }}>
            <input
              type="text"
              placeholder="Type contact name"
              autoFocus
              style={{
                width: "80%",
                border: "none",
                position: "",
                bottom: "",
                right: "",
                height: "1.5rem",
                paddingLeft: "1.5rem",
                outline: "none"
              }}
            />
          </li>
          {sortedContacts.map((contact, index) => (
            <li
              onClick={() => {
                props.pass(contact);
              }}
            >
              <img src={contact.dp} alt="Contact Display pic" />
              <span className="contactName">{contact.name}</span>
              <span className="contactTime">time</span>
              <br></br>
              {contact.about}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewGrp;
