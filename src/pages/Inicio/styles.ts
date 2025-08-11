import styled from "styled-components";

export const Container = styled.div`
  width: 62vw;
  margin: 3.5em auto;
  display: flex;
  gap: 16px;
`;

export const Content = styled.div`
  flex-grow: 2;
`;

export const ListaCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 24px;
`;

export const CardItem = styled.li``;
