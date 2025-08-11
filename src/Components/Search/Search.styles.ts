import styled from "styled-components";

export const Input = styled.input<{ icon: string }>`
  width: 100%;
  height: 49px;
  padding: 0.5em 1em 0.5em 4em;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.cinzaClaro};
  font-family: ${({ theme }) => theme.fontes.primaria};
  font-size: 22px;
  background-color: ${({ theme }) => theme.colors.cinzaEscuro};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 32px center;
  background-size: 20px 20px;
`;
