import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import contacts from "./Contacts";
import chatListContacts from "./ChatListContacts";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import NewGrp from "./NewGrp";
function NewChatList(props) {
  const recentContacts = chatListContacts.filter((contact, index) => {
    return index < 3;
  });
  const sortedContacts = contacts;
  sortedContacts.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();
    if (fa > fb) return 1;
    if (fa < fb) return -1;
    return 0;
  });
  function showNewGrpList() {
    props.setClickForNewChat(false);
    props.setClickForNewGrp(true);
  }
  return (
    <div className="NewChatList ChatList">
      <div className="searchBox">
        <SearchIcon className="searchIcon" />
        <input placeholder="Search contacts"></input>
      </div>
      <div className="">
        <ul>
          <li onClick={showNewGrpList}>
            <button className="newGrpBtn">
              <GroupAddIcon fontSize="small" />
            </button>
            <span className="contactName">New Group</span>
            <span className="contactTime"> </span>
            <br></br>
            &nbsp;
          </li>
          <li className="alphabet">FREQUENTLY CONTACTED</li>
          {recentContacts.map((contact, index) => (
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

export default NewChatList;
