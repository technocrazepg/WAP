import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function OtherHeader(props) {
  function goBack() {
    props.setClickForNewChat(false);
    props.setClickForProfile(false);
    props.setClickForNewGrp(false);
    props.setClickForOther(false);
    props.setClickForSettings(false);
  }
  function showHeading() {
    if (props.isClickedForNewChat) {
      return <h4>New Chat</h4>;
    } else if (props.isClickedForProfile) {
      return <h4>Profile</h4>;
    } else if (props.isClickedForNewGrp) {
      return <h4>Add group participants</h4>;
    } else if (props.isClickedForSettings) {
      return <h4>Settings</h4>;
    }
  }
  return (
    <div className="NewChatHeader">
      <button onClick={goBack}>
        <ArrowBackIcon fontSize="small" />
      </button>
      {showHeading()}
    </div>
  );
}

export default OtherHeader;
