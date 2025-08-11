import {
  ContainerFiltro,
  ContainerFiltroButton,
  ContainerFiltroLi,
  ContainerFiltroNav,
  ContainerFiltroUl,
} from "./Filter.styles";

export default function Filter() {
  return (
    <ContainerFiltroNav>
      <ContainerFiltro>
        <ContainerFiltroUl>
          <ContainerFiltroLi>Programação</ContainerFiltroLi>
        </ContainerFiltroUl>
        <ContainerFiltroUl>
          <ContainerFiltroLi>Front-End</ContainerFiltroLi>
        </ContainerFiltroUl>
        <ContainerFiltroUl>
          <ContainerFiltroLi>Back-End</ContainerFiltroLi>
        </ContainerFiltroUl>
        <ContainerFiltroUl>
          <ContainerFiltroLi>DevOps</ContainerFiltroLi>
        </ContainerFiltroUl>
      </ContainerFiltro>
      <ContainerFiltroButton>Limpar tudo</ContainerFiltroButton>
    </ContainerFiltroNav>
  );
}
