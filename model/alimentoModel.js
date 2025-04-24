// model/alimentoModel.js
import { alimentos, gerarId } from "../database/alimentos.js";

export function getAll() {
  return alimentos;
}

export function getById(id) {
  return alimentos.find(a => a.id === id);
}

export function getByCategoria(categoria) {
  return alimentos.filter(a => a.categoria.toLowerCase() === categoria);
}

export function create(dado) {
  const novo = { id: gerarId(), ...dado };
  alimentos.push(novo);
  return novo;
}

export function update(id, dado) {
  const index = alimentos.findIndex(a => a.id === id);
  if (index === -1) return null;
  alimentos[index] = { ...alimentos[index], ...dado };
  return alimentos[index];
}

export function remove(id) {
  const index = alimentos.findIndex(a => a.id === id);
  if (index === -1) return null;
  const deletado = alimentos.splice(index, 1);
  return deletado[0];
}

