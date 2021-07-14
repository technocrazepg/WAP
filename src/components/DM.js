import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import bg from "./images/bg.jpg";
import midImg from "./images/midImg.png";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
function DM(props) {
  const [send, setSend] = useState(false);
  const [msg, setMsg] = useState("");
  function msgInput(e) {
    const { value } = e.target;
    setMsg(value);
    setSend(true);
    if (value === "") setSend(false);
  }
  // function resize() {
  //   const textarea = document.querySelector("#autoresizing");
  //   textarea.addEventListener("input", autoResize, false);

  //   function autoResize() {
  //     this.style.height = "auto";
  //     if (this.style.height < 20) {
  //       this.style.height = this.scrollHeight + "px";
  //     }
  //   }
  // }
  return (
    <div className="DM">
      {props.contact.name ? (
        <div
          style={{
            backgroundImage: `url(${bg})`
            // backgroundSize: "100% 100%",
            // backgroundRepeat: "no-repeat"
          }}
        >
          <div className="DM_header">
            <img src={props.contact.dp} alt="DP of contact" />
            <span
              style={{
                color: "rgb(56, 55, 55)",
                fontWeight: "400",
                fontSize: "1.2rem"
              }}
            >
              {props.contact.name}
            </span>
            <button>
              <SearchIcon style={{ marginRight: "0.5rem" }} fontSize="small" />
              <MoreVertIcon fontSize="small" />
            </button>
          </div>
          <div className="DM_chats">
            <div className="receivedMsg">hifdhfhfdhfhkhk</div>
            <br />
            <br />
            <div className="sentMsg">hihkhk</div>
          </div>
          <div className="DM_footer">
            <button>
              <InsertEmoticonIcon />
            </button>
            <button>
              <AttachFileIcon />
            </button>
            <textarea
              className="hideScroll"
              placeholder="Type a message"
              onChange={msgInput}
              id="autoresizing"
            />
            <button>{send ? <SendIcon /> : <MicIcon />}</button>
          </div>
        </div>
      ) : (
        <div className="DM_firstPg">
          <img src={midImg} alt="" />
          <div style={{ width: "70%" }}>
            <p style={{ fontSize: "2rem", fontWeight: "200", color: "gray" }}>
              Keep your phone connected
            </p>
            <p style={{ fontWeight: "200", color: "gray" }}>
              WhatsApp connects to your phone to sync messages. To reduce data
              usage connect your phone to Wi-Fi
            </p>
            <br />
            <hr />
            <br />
            <span style={{ fontWeight: "200", color: "gray" }}>
              <LaptopMacIcon
                style={{ position: "relative", top: "5px" }}
                fontSize="small"
              />
              &nbsp;&nbsp;WhatsApp is available for Windows.
            </span>
            &nbsp;
            <a
              style={{ color: "rgb(3,163,145)", textDecoration: "none" }}
              href="https://www.whatsapp.com/download"
              target="_blank"
            >
              Get it here.
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DM;
