export interface Theme {
  colors: {
    verdeDestaque: string;
    verdePetroleo: string;
    grafite: string;
    cinzaEscuro: string;
    cinzaMedio: string;
    cinza: string;
    cinzaClaro: string;
    offWhite: string;
    branco: string;
  };
  fontes: {
    primaria: string;
  };
}

export const theme: Theme = {
  colors: {
    verdeDestaque: "#81fe88",
    verdePetroleo: "#132E35",
    grafite: "#01080E",
    cinzaEscuro: "#171D1F",
    cinzaMedio: "#888888",
    cinza: "#3E3E3F",
    cinzaClaro: "#BCBCBC",
    offWhite: "#E1E1E1",
    branco: "#FFFFFF",
  },
  fontes: {
    primaria: "'Prompt', sans-serif",
  },
};
