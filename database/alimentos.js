// database/alimentos.js
export let alimentos = [
    { id: 1, nome: "Maçã", categoria: "Frutas", calorias: 52 },
    { id: 2, nome: "Arroz integral", categoria: "Cereais", calorias: 111 },
    { id: 3, nome: "Brócolis", categoria: "Verduras", calorias: 34 }
  ];
  
  export function gerarId() {
    return alimentos.length ? alimentos[alimentos.length - 1].id + 1 : 1;
  }
  