import { Input } from "./Search.styles";
import { useState } from "react";

export default function Search() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  return (
    <Input
      type="search"
      placeholder="Digite o que você procura"
      icon="https://cdn-icons-png.flaticon.com/512/622/622669.png"
      value={termoPesquisa}
      onChange={(evento) => setTermoPesquisa(evento.target.value)}
    />
  );
}
