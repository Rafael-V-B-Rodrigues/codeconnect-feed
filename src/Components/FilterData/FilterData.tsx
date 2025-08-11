import { useState } from "react";
import {
  ContainerFiltro,
  ContainerFiltroButton,
  ContainerFiltroNav,
} from "./FilterData.styles";

export default function FilterData() {
  const [active, setActive] = useState<"recentes" | "paraVoce">("recentes");

  const handleChangeSection = (section: "recentes" | "paraVoce") => {
    setActive(section);
  };

  return (
    <ContainerFiltroNav>
      <ContainerFiltro>
        <ContainerFiltroButton
          onClick={() => handleChangeSection("recentes")}
          active={active === "recentes"}
        >
          Recentes
        </ContainerFiltroButton>
        <ContainerFiltroButton
          onClick={() => handleChangeSection("paraVoce")}
          active={active === "paraVoce"}
        >
          Para Você
        </ContainerFiltroButton>
      </ContainerFiltro>
    </ContainerFiltroNav>
  );
}
