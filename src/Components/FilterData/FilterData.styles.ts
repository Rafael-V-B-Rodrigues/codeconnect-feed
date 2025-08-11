import styled from "styled-components";
import { FilterDataProps } from "./FilterData.types";

export const ContainerFiltroNav = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: 3em;
`;
export const ContainerFiltro = styled.section`
  display: flex;
  gap: 3em;
`;

export const ContainerFiltroUl = styled.ul`
  background-color: ${({ theme }) => theme.colors.cinzaClaro};
  color: ${({ theme }) => theme.colors.cinzaEscuro};
  font-size: 18px;
  padding: 0.25em 0.5em;
  border: 4px;
  border-radius: 8px;
  list-style-type: none;
  display: flex;
  gap: 10px;
  cursor: pointer;
`;
export const ContainerFiltroLi = styled.li``;

export const ContainerFiltroButton = styled.button<FilterDataProps>`
  border: none;
  background-color: transparent;
  color: ${({ theme, active }) =>
    active ? theme.colors.verdeDestaque : theme.colors.cinzaClaro};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontes.primaria};
  cursor: pointer;
`;
