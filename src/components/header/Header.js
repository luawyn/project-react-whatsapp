import camera from "../../assets/video-cam.svg";
import phone from "../../assets/phone.svg";
import hamburger from "../../assets/hamburger.svg";
import { MainHeader, MainPerson, Icons } from "./headerStyled";

function Header() {
  return (
    <MainHeader>
      <MainPerson>
        <img src="https://picsum.photos/200" alt="imagem perfil" />
        <div>
          <p>Zilan</p>
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
