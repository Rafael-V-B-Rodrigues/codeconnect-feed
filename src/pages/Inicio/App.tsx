import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Filter from "../../Components/Filter/Filter";
import FilterData from "../../Components/FilterData/FilterData";
import Search from "../../Components/Search/Search";
import SideBar from "../../Components/SideBar/SideBar";
import { CardItem, Container, Content, ListaCards } from "./styles";
import { CardProps } from "../../Components/Card/Card.types";

export function App() {
  const [dados, setDados] = useState<CardProps[]>([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados));
  }, []);

  return (
    <Container>
      <SideBar />
      <Content>
        <Search />
        <Filter />
        <FilterData />
        <ListaCards>
          {dados
            ? dados.map((item, index) => (
                <CardItem key={index}>
                  <Card
                    id={item.id}
                    titulo={item.titulo}
                    resumo={item.resumo}
                    linhasDeCodigo={item.linhasDeCodigo}
                    compartilhamentos={item.compartilhamentos}
                    comentarios={item.comentarios}
                    usuario={item.usuario}
                    imagem_capa={item.imagem_capa}
                  />
                </CardItem>
              ))
            : null}
        </ListaCards>
      </Content>
    </Container>
  );
}
