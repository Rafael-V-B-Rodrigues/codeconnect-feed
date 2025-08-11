import {
  CardArticle,
  CardContent,
  CardImage,
  CardImageContainer,
  CardRodape,
  CardRodapeImg,
  CardRodapeLi,
  CardRodapeUl,
  CardRodapeUser,
  CardText,
  CardTitulo,
} from "./Card.styles";
import Capa from "../../assets/Images/Capa.png";
import CodeIcon from "../../assets/Icons/SVG/code.svg";
import ChatIcon from "../../assets/Icons/SVG/chat.svg";
import ShareIcon from "../../assets/Icons/SVG/share.svg";
import UserIcon from "../../assets/Icons/SVG/User.svg";
import { CardProps } from "./Card.types";
export default function Card({
  id,
  imagem_capa,
  comentarios,
  compartilhamentos,
  linhasDeCodigo,
  titulo,
  resumo,
  usuario,
}: CardProps) {
  return (
    <CardArticle>
      <CardImageContainer>
        <CardImage src={imagem_capa} alt="Imagem do post" />
      </CardImageContainer>
      <CardContent>
        <CardTitulo>{titulo}</CardTitulo>
        <CardText>{resumo}</CardText>
      </CardContent>
      <CardRodape>
        <CardRodapeUl>
          <CardRodapeLi>
            <CardImage src={CodeIcon} alt="Códigos" />
            {linhasDeCodigo}
          </CardRodapeLi>

          <CardRodapeLi>
            <CardImage src={ShareIcon} alt="Compartilhamentos" />
            {compartilhamentos}
          </CardRodapeLi>

          <CardRodapeLi>
            <CardImage src={ChatIcon} alt="Comentários" /> {comentarios}
          </CardRodapeLi>
        </CardRodapeUl>

        <CardRodapeUser>
          <CardRodapeImg src={usuario.imagem} alt="Imagem do usuario" />
          {usuario.nome}
        </CardRodapeUser>
      </CardRodape>
    </CardArticle>
  );
}
