import React, { useState } from "react";
import pic from "./images/ppic.png";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPen } from "@fortawesome/free-solid-svg-icons";
function Profile(props) {
  const [userName, setUser] = useState("Pranav");
  const [u_hiddenIcon, setU_HiddenIcon] = useState(true);
  const [a_hiddenIcon, setA_HiddenIcon] = useState(true);
  const [about, setAbout] = useState("Something");
  function chng(e) {
    const { value, name } = e.target;
    if (name === "name") {
      setUser(value);
      setU_HiddenIcon(false);
    } else if (name === "about") {
      setAbout(value);
      setA_HiddenIcon(false);
    }
  }
  function saveUserName() {
    if (userName === "") {
      alert("User Name can't be empty !");
      document.getElementById("username").focus();
    } else {
      setU_HiddenIcon(true);
      const val = document.getElementById("username").value;
      setUser(val);
    }
  }
  function editUser() {
    document.getElementById("username").focus();
    setU_HiddenIcon(false);
  }
  function saveAbout() {
    if (about === "") {
      alert("About can't be empty !");
      document.getElementById("about").focus();
    } else {
      setA_HiddenIcon(true);
      const val = document.getElementById("about").value;
      setAbout(val);
    }
  }
  function editAbout() {
    document.getElementById("about").focus();
    setA_HiddenIcon(false);
  }
  return (
    <div className="Profile">
      <div className="imgSection">
        <img id="pp" src={pic} alt="profile pic" />
        <div className="hoveredTxt">
          <AddAPhotoIcon fontSize="small" /> <br />
          CHANGE <br />
          PROFILE PHOTO
        </div>
      </div>
      <div className="userName">
        <span style={{ color: "rgb(0,150,136)" }}>Your Name</span>
        <textarea
          id="username"
          type="text"
          value={userName}
          name="name"
          onChange={chng}
          maxlength="25"
          className="hideScroll"
          spellCheck="false"
        />
        {u_hiddenIcon ? (
          <button style={{ position: "relative", top: "-2rem" }}>
            <EditIcon fontSize="small" onClick={editUser} />
          </button>
        ) : (
          <span>
            <button>
              <CheckIcon fontSize="small" onClick={saveUserName} />
            </button>
            <button>
              <InsertEmoticonIcon fontSize="small" />
            </button>
            <button
              style={{
                position: "relative",
                top: "-2.1rem",
                backgroundColor: "transparent",
                cursor: "auto"
              }}
            >
              {25 - userName.length}
            </button>
          </span>
        )}
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          backgroundColor: " rgb(237, 237, 237)",
          width: "100%",
          padding: "1.5rem",
          color: "rgb(145, 145, 145)"
        }}
      >
        This is not your username or pin. This name will be visible to your
        WhatsApp contacts.
      </div>
      <div className="userName">
        <span style={{ color: "rgb(0,150,136)" }}>About</span>
        <textarea
          id="about"
          type="text"
          value={about}
          name="about"
          onChange={chng}
          className="hideScroll"
          spellCheck="false"
        />
        {a_hiddenIcon ? (
          <button style={{ position: "relative", top: "-2rem" }}>
            <EditIcon fontSize="small" onClick={editAbout} />
          </button>
        ) : (
          <span>
            <button>
              <CheckIcon fontSize="small" onClick={saveAbout} />
            </button>
            <button>
              <InsertEmoticonIcon fontSize="small" />
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Profile;
