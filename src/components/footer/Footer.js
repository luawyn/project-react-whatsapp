/* eslint-disable jsx-a11y/anchor-is-valid */
import { FooterMain } from "./footerStyled";
import mic from "../../assets/microphone.svg";
import smiley from "../../assets/smiley.svg";
import paperclip from "../../assets/paperclip.svg";
import { useState } from "react";

function Footer() {
  const [message, setMessage] = useState("");

  const onChangeInput = (event) => {
    setMessage(event.target.value);
  };

  const onKeyDownInput = (event) => {
    if (event.key === "Enter") {
      console.log(message);
      setMessage("");
    }
  };

  return (
    <FooterMain>
      <div>
        <a href="#">
          <img src={smiley} alt="smiley icon" />
        </a>

        <input
          type="text"
          value={message}
          onChange={onChangeInput}
          placeholder="Type a message"
          onKeyDown={onKeyDownInput}
        />

        <a href="#">
          <img src={paperclip} alt="paperclip icon" />
        </a>
      </div>
      <div>
        <a href="#">
          <img src={mic} alt="microphone icon" />
        </a>
      </div>
    </FooterMain>
  );
}

export default Footer;
