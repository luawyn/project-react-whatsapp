import camera from "../../assets/video-cam.svg";
import phone from "../../assets/phone.svg";
import hamburger from "../../assets/hamburger.svg";
import { MainHeader, MainPerson, Icons } from "./headerStyled";

function Header(props) {
  function onChangePerson(event) {
    props.setPerson(event.target.value);
  }
  return (
    <MainHeader>
      <MainPerson>
        <img src="https://picsum.photos/200" alt="imagem perfil" />
        <div>
          <select value={props.person} onChange={onChangePerson}>
            <option value="me">Me</option>
            <option value="gandalf">Gandalf</option>
            <option value="arwen">Arwen</option>
            <option value="samwise">Samwise</option>
            <option value="aragorn">Aragorn</option>
          </select>
          <p>Online</p>
        </div>
      </MainPerson>
      <Icons>
        <img src={camera} alt="camera" />
        <img src={phone} alt="phone" />
        <img src={hamburger} alt="hamburguer" />
      </Icons>
    </MainHeader>
  );
}

export default Header;
