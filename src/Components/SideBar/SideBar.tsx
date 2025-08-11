import {
  IconImage,
  SideBarContainer,
  SideBarIcons,
  SideBarImage,
  SideBarli,
  SideBarLink,
  SideBarNav,
  SideBarPublicar,
  SideBarSpan,
  SideBarUl,
} from "./SideBar.styles";
import Logo from "../../assets/Icons/SVG/Logo.svg";
import Feed from "../../assets/Icons/SVG/feed.svg";
import Perfil from "../../assets/Icons/SVG/account_circle.svg";
import Sobre from "../../assets/Icons/SVG/info.svg";
import Sair from "../../assets/Icons/SVG/logout.svg";
import { useLocation } from "react-router-dom";
export default function SideBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <SideBarContainer>
      <SideBarImage src={Logo} alt="Logo do CodeConnect" />
      <SideBarNav>
        <SideBarUl>
          <SideBarli>
            <SideBarPublicar href="#">Publicar</SideBarPublicar>
          </SideBarli>

          <SideBarli>
            <SideBarLink to="/feed" active={currentPath === "/feed"}>
              <SideBarIcons>
                <IconImage src={Feed} alt="Ícone do Feed" />
                <SideBarSpan>Feed</SideBarSpan>
              </SideBarIcons>
            </SideBarLink>
          </SideBarli>

          <SideBarli>
            <SideBarLink to="/perfil" active={currentPath === "/perfil"}>
              <SideBarIcons>
                <IconImage src={Perfil} alt="Ícone do Perfil" />
                <SideBarSpan>Perfil</SideBarSpan>
              </SideBarIcons>
            </SideBarLink>
          </SideBarli>

          <SideBarli>
            <SideBarLink to="/sobre" active={currentPath === "/sobre"}>
              <SideBarIcons>
                <IconImage src={Sobre} alt="Ícone do Sobre Nós" />
                <SideBarSpan>Sobre Nós</SideBarSpan>
              </SideBarIcons>
            </SideBarLink>
          </SideBarli>

          <SideBarli>
            <SideBarLink to="/sair" active={currentPath === "/sair"}>
              <SideBarIcons>
                <IconImage src={Sair} alt="Ícone do Logout" />
                <SideBarSpan>Sair</SideBarSpan>
              </SideBarIcons>
            </SideBarLink>
          </SideBarli>
        </SideBarUl>
      </SideBarNav>
    </SideBarContainer>
  );
}
