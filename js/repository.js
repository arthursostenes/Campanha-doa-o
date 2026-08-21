const STORAGE_KEY = 'campanha-alimente-esperanca';

class Repository {
  constructor() {
    const dados = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    this.dados = {
      doadores: dados.doadores || [],
      alimentos: dados.alimentos || [],
      doacoes: dados.doacoes || []
    };
  }

  salvar() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dados));
  }

  listar(tipo) {
    return this.dados[tipo];
  }

  buscar(tipo, id) {
    return this.dados[tipo].find((item) => item.id === id);
  }

  adicionar(tipo, item) {
    this.dados[tipo].push(item);
    this.salvar();
    return item;
  }

  atualizar(tipo, id, novosDados) {
    const indice = this.dados[tipo].findIndex((item) => item.id === id);
    if (indice === -1) return null;
    this.dados[tipo][indice] = { ...this.dados[tipo][indice], ...novosDados, id };
    this.salvar();
    return this.dados[tipo][indice];
  }

  remover(tipo, id) {
    const tamanhoAnterior = this.dados[tipo].length;
    this.dados[tipo] = this.dados[tipo].filter((item) => item.id !== id);
    this.salvar();
    return this.dados[tipo].length < tamanhoAnterior;
  }
}

window.Repository = Repository;
