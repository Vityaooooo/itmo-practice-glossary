import itmoLogo from "../../assets/logo-itmo.svg";
import { NavLink } from "react-router";
import {
  headerStyles,
  logoStyles,
  navLinkStyles,
} from "../../styles";


export default function Header() {
  return (
    <header className={headerStyles}>
      <img className={logoStyles} src={itmoLogo} alt="" />
      <ul className={navLinkStyles}>
        <li>
          <NavLink to="/mindmap" end>
            Граф
          </NavLink>
        </li>
        <li>
          <NavLink to="/glossary" end>
            Глоссарий
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
