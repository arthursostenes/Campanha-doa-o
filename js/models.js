class Doador {
  constructor({ id, nome, telefone, email, endereco }) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;
  }
}

class Alimento {
  constructor({ id, nome, quantidade, unidade }) {
    this.id = id;
    this.nome = nome;
    this.quantidade = quantidade;
    this.unidade = unidade;
  }
}

class Doacao {
  constructor({ id, data, doadorId, alimentos }) {
    this.id = id;
    this.data = data;
    this.doadorId = doadorId;
    this.alimentos = alimentos;
  }
}

window.Models = { Doador, Alimento, Doacao };
