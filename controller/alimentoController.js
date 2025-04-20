// controller/alimentoController.js
import * as Alimento from "../model/alimentoModel.js";

export function listar(req, res) {
  res.json(Alimento.getAll());
}

export function buscar(req, res) {
  const id = parseInt(req.params.id);
  const alimento = Alimento.getById(id);
  alimento ? res.json(alimento) : res.status(404).json({ erro: "Alimento não encontrado" });
}

export function criar(req, res) {
  const criado = Alimento.create(req.body);
  res.status(201).json(criado);
}

export function atualizar(req, res) {
  const id = parseInt(req.params.id);
  const atualizado = Alimento.update(id, req.body);
  atualizado ? res.json(atualizado) : res.status(404).json({ erro: "Alimento não encontrado" });
}

export function deletar(req, res) {
  const id = parseInt(req.params.id);
  const deletado = Alimento.remove(id);
  deletado ? res.json(deletado) : res.status(404).json({ erro: "Alimento não encontrado" });
}
