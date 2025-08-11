import styled from "styled-components";

export const CardArticle = styled.article`
  color: ${({ theme }) => theme.colors.cinzaClaro};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.cinzaEscuro};
  border-radius: 8px;
  width: 100%;
  display: grid;
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.cinzaClaro};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 90%;
  height: 80%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 16px 24px 0px #0000003d;
`;

export const CardContent = styled.div`
  padding: 16px;
  height: 100%;
`;

export const CardTitulo = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;
export const CardText = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
`;

export const CardRodape = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0;
  padding: 1em 1em;
`;

export const CardRodapeUl = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  align-items: baseline;
`;

export const CardRodapeLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 15px;
`;

export const CardRodapeUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardRodapeImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  object-fit: cover;
`;
