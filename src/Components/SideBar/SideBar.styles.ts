import styled from "styled-components";
import { Link } from "react-router-dom";
import { SideBarLinkProps } from "./SideBar.types";

export const SideBarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.cinzaEscuro};
  padding: 2.5em 0.5em;
  width: 15%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export const SideBarImage = styled.img``;

export const SideBarNav = styled.nav``;

export const SideBarUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  list-style-type: none;
  margin-top: 5em;
`;

export const SideBarli = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  gap: 10px;
`;

export const SideBarPublicar = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.verdeDestaque};
  color: ${({ theme }) => theme.colors.verdeDestaque};
  padding: 0.75em 1em;
  border-radius: 8px;
  text-decoration: none;
`;
export const SideBarLink = styled(Link)<SideBarLinkProps>`
  color: ${({ theme, active }) =>
    active ? theme.colors.branco : theme.colors.cinzaClaro};
  text-decoration: none;
`;

export const SideBarIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconImage = styled.img``;

export const SideBarSpan = styled.span``;
