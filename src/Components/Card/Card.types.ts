export type CardProps = {
  imagem_capa: string;
  id: number;
  titulo: string;
  resumo: string;
  linhasDeCodigo: number;
  compartilhamentos: number;
  comentarios: number;
  usuario: {
    imagem: string;
    nome: string;
  };
};
